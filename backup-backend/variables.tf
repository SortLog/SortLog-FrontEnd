variable "app_env" {}
variable "stack" {
  description = "name of the ECS task "
  default     = "sortlog"
}
variable "environment" {
  description = "name of the ECS task "
  default     = "production"
}

variable "private_subnets" {
  description = "a list of CIDRs for private subnets in your VPC, must be set if the cidr variable is defined, needs to have as many elements as there are availability zones"
  default     = ["10.0.0.0/20", "10.0.32.0/20"]
}

variable "public_subnets" {
  description = "a list of CIDRs for public subnets in your VPC, must be set if the cidr variable is defined, needs to have as many elements as there are availability zones"
  default     = ["10.0.16.0/20", "10.0.48.0/20"]
}
variable "az_count" {
  description = "Number of AZs to cover in a given region"
  default     = "2"
}

variable "container_port" {
  description = "The port where the Docker is exposed"
  default     = 3000
}
variable "health_check_path" {
  default = "/"
}
# variable "container_image" {
#   description = "Docker image to run in the ECS cluster"
#   default     = "003374733998.dkr.ecr.ap-southeast-2.amazonaws.com/sortlog-repository"//"public.ecr.aws/w2j2c5k5/youtube-local"
# }
variable "fargate_cpu" {
  description = "Fargate instance CPU units to provision (1 vCPU = 1024 CPU units)"
  default     = "1024"
}

variable "fargate_memory" {
  description = "Fargate instance memory to provision (in MiB)"
  default     = "2048"
}
variable "backendurl"{
  default = "uat.sortlog.net"
}
