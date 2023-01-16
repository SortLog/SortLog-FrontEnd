output "cloudfrontarn" {
  description = "ARN of the bucket"
  value       = aws_cloudfront_origin_access_identity.my_origin_access_identity.iam_arn
}

output "cloudfrontpath" {
  description = "ARN of the bucket"
  value       = aws_cloudfront_origin_access_identity.my_origin_access_identity.cloudfront_access_identity_path
}
output "cloudfrontdomain"{
  value =aws_cloudfront_distribution.s3_distribution.domain_name
}

output "cloudfronthosted_zone_id"{
  value =aws_cloudfront_distribution.s3_distribution.hosted_zone_id
}