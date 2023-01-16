output "alb_hostname" {
  value = aws_alb.main.dns_name
}
output "alb_zoneid" {
  value = aws_alb.main.zone_id
}
output "repository_url"{
  value = aws_ecr_repository.sortlog.repository_url
}
output "ECS_Cluster_NAME"{
  value = aws_ecs_cluster.main.name
}
output "ECS_Service_NAME"{
  value = aws_ecs_service.main.name
}