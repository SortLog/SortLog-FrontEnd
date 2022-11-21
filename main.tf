# Terraform configuration

# Terraform configuration

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.0.0"
    }
  }
}

provider "aws" {
  region = "ap-southeast-2"
}


module "website_s3_bucket" {
  source = "./terraform/modules/aws-s3-static-website-bucket"
  bucketname = var.bucket_name
  app_env=var.app_env
  bucketarn=module.website_s3_bucket.arn
  oai_iam_arn=module.website_CDN.cloudfrontarn

}

module "website_CDN" {
  source = "./terraform/modules/CDN"
  CDN_domain_name = module.website_s3_bucket.domain
  bucketname = var.bucket_name
  app_env=var.app_env
  //acm_certificate_arn=module.ACM.ACM_arn
}

module "DNS" {
  source = "./terraform/modules/DNS record"
  cdndomain = module.website_CDN.cloudfrontdomain
  hosted_zone_id=module.website_CDN.cloudfronthosted_zone_id
  url= "frontend-${var.app_env}.sortlog.net" //var.frontendurl
}

####To configure Terraform to store the state in your S3 bucket (with encryption and locking), you need to add a backend configuration to your Terraform code.

# terraform {
#   backend "s3" {
#     # Replace this with your bucket name!
#     bucket         = "sortlog-tfstate-s3"
#     key            = "terraform.tfstate"
#     region         = "ap-southeast-2"

#     # Replace this with your DynamoDB table name!
#     dynamodb_table = "DBlock-sortlog"
#     encrypt        = true
#   }
# }