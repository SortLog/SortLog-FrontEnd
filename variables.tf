# Input variable definitions
# Input variable definitions
variable "app_env" {}
variable "bucket_name" {
  description = "Name of the s3 bucket. Must be unique."
  type        = string
  default = "sortlog" //change to your name 
}

variable "maindomain"{
  type=string
  default="sortlog.net"
}

