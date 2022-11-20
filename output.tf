# Output variable definitions

output "arn" {
  description = "ARN of the bucket"
  value       = module.website_s3_bucket.arn
}

output "name" {
  description = "Name (id) of the bucket"
  value       = module.website_s3_bucket.name
}

output "domain" {
  description = "Domain name of the bucket"
  value       = module.website_s3_bucket.domain
}
