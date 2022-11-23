//route table for public subnet is necessary?  
###########create vpc and internet _gateway ############
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16" // private network range 
  tags = {
     Name = "${var.stack}-VPC-${var.app_env}"
   }
}

# resource "aws_vpc" "main" {
#   cidr_block = "10.0.0.0/16" // private network range 
#   tags = {
#      Name = "${var.stack}-VPC"
#   }

# }
###############Create public and private subnet#############
data "aws_availability_zones" "available" {
}
resource "aws_subnet" "private" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = element(var.private_subnets, count.index) //have to in the range of vpc
  availability_zone = data.aws_availability_zones.available.names[count.index]
  count             = var.az_count
  tags = {
     Name = "${var.stack}-private subnet-${var.app_env}"
  }
}
 
resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = element(var.public_subnets, count.index) //The IPv4 CIDR block for the subnet.
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  count                   = var.az_count
  tags = {
     Name = "${var.stack}-private subnet-${var.app_env}"
  }
  map_public_ip_on_launch = true //instance in public subnet will have public IP 
}
# Internet Gateway for the public subnet
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id
  tags = {
     Name = "${var.stack}-internetGateway-${var.app_env}"
  }
}
##
# Route the public subnet traffic through the IGW // send all traffic to the internate gateway
resource "aws_route" "internet_access" {
  route_table_id         = aws_vpc.main.main_route_table_id
  destination_cidr_block = "0.0.0.0/0" // all 
  gateway_id             = aws_internet_gateway.main.id
}

###########Create a NAT gateway with an Elastic IP for each private subnet to get internet connectivity########################
resource "aws_eip" "gw" {
  count      = var.az_count
  vpc        = true
  depends_on = [aws_internet_gateway.main]
  # tags = {
  #    Name = "${var.stack}-eip-${var.app_env}"
  # } 
}

resource "aws_nat_gateway" "gw" {
  count         = var.az_count
  subnet_id     = element(aws_subnet.public.*.id, count.index)
  allocation_id = element(aws_eip.gw.*.id, count.index)
  tags = {
     Name = "${var.stack}-NAT-${var.app_env}"
  }
}

################ Create a new route table for the private subnets, make it route non-local traffic through the NAT gateway to the internet#############
resource "aws_route_table" "private" {
  count  = var.az_count
  vpc_id = aws_vpc.main.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = element(aws_nat_gateway.gw.*.id, count.index)
  }
  tags = {
     Name = "${var.stack}-private route table-${var.app_env}"
  }

}

#Explicitly associate the newly created route tables to the private subnets (so they don't default to the main route table)
resource "aws_route_table_association" "private" {
  count          = var.az_count
  subnet_id      = element(aws_subnet.private.*.id, count.index)
  route_table_id = element(aws_route_table.private.*.id, count.index)


}


#Set up security group 
#ALB Security Group: Edit to restrict access to the application
resource "aws_security_group" "lb" {
  name        = "${var.stack}-sglb-${var.app_env}"
  description = "controls access to the ALB"
  vpc_id      = aws_vpc.main.id

  ingress {
   protocol         = "tcp"
   from_port        = 80
   to_port          = 80
   cidr_blocks      = ["0.0.0.0/0"]
   ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
   protocol         = "tcp"
   from_port        = 443
   to_port          = 443
   cidr_blocks      = ["0.0.0.0/0"]
   ipv6_cidr_blocks = ["::/0"]
  }
  
  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
     Name = "${var.stack}-sgalb-${var.app_env}"
  }
}
#Traffic to the ECS cluster should only come from the ALB
resource "aws_security_group" "ecs_tasks" {
  name   = "${var.stack}-sgecs_task-${var.app_env}"
  vpc_id = aws_vpc.main.id
 
  ingress {
   protocol         = "tcp"
   from_port        = var.container_port
   to_port          = var.container_port //only one port 
   security_groups = [aws_security_group.lb.id]
  }
 
  egress {
   protocol         = "-1"
   from_port        = 0
   to_port          = 0
   cidr_blocks      = ["0.0.0.0/0"]
   ipv6_cidr_blocks = ["::/0"]
  }
  tags = {
     Name = "${var.stack}-sgecs-${var.app_env}"
  }
}

################Create a load balancer #################
resource "aws_alb" "main" {
  name            = "${var.stack}-alb-${var.app_env}"
  subnets         = aws_subnet.public.*.id
  security_groups = [aws_security_group.lb.id]
  load_balancer_type = "application"
  enable_deletion_protection = false
  tags = {
     Name = "${var.stack}-alb-${var.app_env}"
  }
}

resource "aws_alb_target_group" "app" {
  name        = "${var.stack}-albtg-${var.app_env}"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip"

  health_check {
    healthy_threshold   = "3"
    interval            = "30"
    protocol            = "HTTP"
    matcher             = "200"
    timeout             = "3"
    path                = var.health_check_path //route path / is alive or not 
    unhealthy_threshold = "2"
  }
  tags = {
     Name = "${var.stack}-albtarget-${var.app_env}"
  }
}

# Redirect all traffic from the ALB to the target group alb listener 
resource "aws_alb_listener" "http" {
  load_balancer_arn = aws_alb.main.id
  port              = 80
  protocol          = "HTTP"
 
  default_action {
   type = "redirect"
 
   redirect {
     port        = 443
     protocol    = "HTTPS"
     status_code = "HTTP_301"
   }
  }
  tags = {
     Name = "${var.stack}-http-${var.app_env}"
  } 
}
resource "aws_alb_listener" "back_end" {
  load_balancer_arn = aws_alb.main.id
  port              = 443
  protocol          = "HTTPS"
 
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = "arn:aws:acm:ap-southeast-2:003374733998:certificate/5e991a42-cd1a-4b0f-b54c-76f8c5d89c50"
 
  default_action {
    target_group_arn = aws_alb_target_group.app.id
    type             = "forward"
  }
  tags = {
     Name = "${var.stack}-backend-${var.app_env}"
  } 
}

#############################ECS container service #############################
resource "aws_ecs_cluster" "main" {
  name = "${var.stack}-sortlogcluster-${var.app_env}"
}

resource "aws_ecs_task_definition" "main" {
  family                   = "${var.stack}-sortlogtask-${var.app_env}"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.fargate_cpu
  memory                   = var.fargate_memory
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = aws_iam_role.ecs_task_role.arn
  container_definitions = jsonencode([{
    name        = "${var.stack}-sortlogcontainer-${var.app_env}"
    image       = "${aws_ecr_repository.sortlog.repository_url}:latest" //"${var.container_image}:latest"//// //
    essential   = true
    environment= [
      {"name": "auth_encryption_salt", "value": "some-salt"},
      {"name": "PORT", "value"= "3000"}
    ]
    portMappings = [{
      protocol      = "tcp"
      containerPort = var.container_port
      hostPort      = var.container_port
    }]
    logConfiguration = {
      logDriver = "awslogs"
      options = {
        awslogs-group         = "ecs/${var.stack}-sortlogloggroup-${var.app_env}"
        awslogs-stream-prefix = "ecs"
        awslogs-region        = "ap-southeast-2"// change to your 
      }
    }
    secrets : [{"name": "MONGO_URL", "valueFrom": "arn:aws:ssm:ap-southeast-2:003374733998:parameter/MONGO_URL"}]
  }])

#   tags = {
#     Name        = "${var.name}-task-${var.environment}"
#     Environment = var.environment
#   }
}

resource "aws_ecs_service" "main" {
 name                               = "${var.stack}-sortlogservice-${var.app_env}"
 cluster                            = aws_ecs_cluster.main.id
 task_definition                    = aws_ecs_task_definition.main.arn
 desired_count                      = 2
 deployment_minimum_healthy_percent = 50
 deployment_maximum_percent         = 200
 launch_type                        = "FARGATE"
 scheduling_strategy                = "REPLICA"
 
 network_configuration {
   security_groups  = [aws_security_group.ecs_tasks.id]
   subnets          = aws_subnet.private.*.id
   assign_public_ip = false //false or true should be false, otherwise your task can be viewed via internet
 }
 
 load_balancer {
   target_group_arn = aws_alb_target_group.app.id
   container_name   = "${var.stack}-sortlogcontainer-${var.app_env}"
   container_port   = var.container_port
 }
 
 depends_on = [aws_alb_listener.back_end, aws_iam_role_policy_attachment.ecs-task-execution-role-policy-attachment]
}

#IAM role for ECS 
resource "aws_iam_role" "ecs_task_execution_role" {
  name = "${var.stack}-sortlogservice-${var.app_env}-decsTaskExecutionRole"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "ecs-tasks.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}
resource "aws_iam_role" "ecs_task_role" {
  name = "${var.stack}-sortlogservice-${var.app_env}-ecsTaskRole"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "ecs-tasks.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}
resource "aws_iam_policy" "policy" {
  name        = "${var.stack}-ssmpolicy-${var.app_env}"
  description = "ssm secret system manager policy"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ssm:GetParameters",
        "secretsmanager:GetSecretValue"
      ],
      "Resource": [
        "arn:aws:ssm:ap-southeast-2:003374733998:parameter/MONGO_URL",
        "arn:aws:secretsmanager:ap-southeast-2:003374733998:secret:MONGO_URL*"
      ]
    }
  ]
}
EOF
}
resource "aws_iam_role_policy_attachment" "ecs-task-execution-role-policy-attachment" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}
resource "aws_iam_role_policy_attachment" "ssm-attach" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = aws_iam_policy.policy.arn
}

#IAM role for autoscaling 
resource "aws_iam_role" "ecs_auto_scale_role" {
  name               = "${var.stack}-sortlogservice-${var.app_env}-ecs_auto_scale_role_name"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "application-autoscaling.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

# ECS auto scale role policy attachment
resource "aws_iam_role_policy_attachment" "ecs_auto_scale_role" {
  role       = aws_iam_role.ecs_auto_scale_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceAutoscaleRole"
}

# auto_scaling.tf
resource "aws_appautoscaling_target" "target" {
  service_namespace  = "ecs"
  resource_id        = "service/${aws_ecs_cluster.main.name}/${aws_ecs_service.main.name}"
  scalable_dimension = "ecs:service:DesiredCount"
  role_arn           = aws_iam_role.ecs_auto_scale_role.arn //
  min_capacity       = 1
  max_capacity       = 4
}
# Automatically scale capacity up by one

resource "aws_appautoscaling_policy" "up" {
  name               = "scale_up-${var.stack}-sortlogservice-${var.app_env}"
  service_namespace  = "ecs"
  resource_id        = aws_appautoscaling_target.target.resource_id//"service/${aws_ecs_cluster.main.name}/${aws_ecs_service.main.name}"
  scalable_dimension = aws_appautoscaling_target.target.scalable_dimension//"ecs:service:DesiredCount"

  step_scaling_policy_configuration {
    adjustment_type         = "ChangeInCapacity"
    cooldown                = 60
    metric_aggregation_type = "Maximum"

    step_adjustment {
      metric_interval_lower_bound = 0
      scaling_adjustment          = 1
    }
  }

}

# Automatically scale capacity down by one

resource "aws_appautoscaling_policy" "down" {
  name               = "scale_down-${var.stack}-sortlogservice-${var.app_env}"
  service_namespace  = "ecs"
  resource_id        = aws_appautoscaling_target.target.resource_id//"service/${aws_ecs_cluster.main.name}/${aws_ecs_service.main.name}"
  scalable_dimension = aws_appautoscaling_target.target.scalable_dimension//"ecs:service:DesiredCount"

  step_scaling_policy_configuration {
    adjustment_type         = "ChangeInCapacity"
    cooldown                = 60
    metric_aggregation_type = "Maximum"

    step_adjustment {
      metric_interval_lower_bound = 0
      scaling_adjustment          = -1
    }
  }
}

# CloudWatch alarm that triggers the autoscaling up policy
resource "aws_cloudwatch_metric_alarm" "service_cpu_high" {
  alarm_name          = "cpu_utilization_high"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = "2"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/ECS"
  period              = "60"
  statistic           = "Average"
  threshold           = "75"

  dimensions = {
    ClusterName = aws_ecs_cluster.main.name
    ServiceName = aws_ecs_service.main.name
  }

  alarm_actions = [aws_appautoscaling_policy.up.arn]
}

#CloudWatch alarm that triggers the autoscaling down policy
resource "aws_cloudwatch_metric_alarm" "service_cpu_low" {
  alarm_name          = "cb_cpu_utilization_low"
  comparison_operator = "LessThanOrEqualToThreshold"
  evaluation_periods  = "2"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/ECS"
  period              = "60"
  statistic           = "Average"
  threshold           = "10"

  dimensions = {
    ClusterName = aws_ecs_cluster.main.name
    ServiceName = aws_ecs_service.main.name
  }

  alarm_actions = [aws_appautoscaling_policy.down.arn]
}
# logs.tf

# Set up CloudWatch group and log stream and retain logs for 30 days
resource "aws_cloudwatch_log_group" "log_group" {
  name              = "ecs/${var.stack}-sortlogloggroup-${var.app_env}"
  retention_in_days = 30

  # tags = {
  #   Name = "demo-log-group"
  # }
}

# resource "aws_cloudwatch_log_stream" "log_stream" {
#   name           = "demo-log-stream"
#   log_group_name = aws_cloudwatch_log_group.log_group.name
# }


#####Create ECR repo##########
resource "aws_ecr_repository" "sortlog" {
  name                 = "sortlog-${var.app_env}"
  image_tag_mutability = "MUTABLE"
  image_scanning_configuration {
    scan_on_push = false
  }
  tags = {
    Name = "${var.stack}-sortlog-${var.app_env}"
  }

}
resource "aws_ecr_lifecycle_policy" "main" {
  repository = aws_ecr_repository.sortlog.name
 
  policy = jsonencode({
   rules = [{
     rulePriority = 1
     description  = "keep last 10 images"
     action       = {
       type = "expire"
     }
     selection     = {
       tagStatus   = "any"
       countType   = "imageCountMoreThan"
       countNumber = 10
     }
   }]
  })
}
#####Create DNS record for alb ###########test
resource "aws_route53_record" "backend" {
  zone_id = "Z06225263LROS058F7FRE"//aws_route53_zone.main.zone_id////change 
  name    =  "${var.app_env}.sortlog.net"//var.backendurl//CName of CDN,var.url aws_cloudfront_distribution.s3_distribution.aliases cannotwork
  type    = "A"

  alias {
    name                   = aws_alb.main.dns_name//aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_alb.main.zone_id//aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}



####To configure Terraform to store the state in your S3 bucket (with encryption and locking), you need to add a backend configuration to your Terraform code.

terraform {
  backend "s3" {
    # Replace this with your bucket name!
    bucket         = "sortlog-tfstate-s3"
    key            = "terraform.tfstate"
    region         = "ap-southeast-2"

    # Replace this with your DynamoDB table name!
    dynamodb_table = "DBlock-sortlog"
    encrypt        = true
  }
}