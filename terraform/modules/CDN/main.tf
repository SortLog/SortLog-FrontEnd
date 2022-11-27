##The following example below creates a CloudFront distribution with an S3 origin.
locals {
  s3_origin_id = "${var.bucketname}-originid-${var.app_env}"//"myS3Origin-2"
}
##Create an Amazon CloudFront origin access identity for S3 bucket 

resource "aws_cloudfront_origin_access_identity" "my_origin_access_identity" {
  comment = "website"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = var.CDN_domain_name
    origin_id   = local.s3_origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.my_origin_access_identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "sortlogfrontend"
  default_root_object = "index.html"


   aliases = ["${var.app_env}.sortlog.net"] //[var.url] // ["frontend-tf.sortlog.net"]//CNAME of CDN 

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id //change 

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all" //time to leave 
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_All"

  restrictions {
    geo_restriction {
      restriction_type = "none" //change to none
    }
  }
  viewer_certificate {
    acm_certificate_arn="arn:aws:acm:us-east-1:003374733998:certificate/dd8d6c01-ca80-427b-9880-34c776904a24"//var.acm_certificate_arn 
    ssl_support_method = "sni-only"
    minimum_protocol_version ="TLSv1.2_2021"
  }
  lambda_function_association {
      event_type   = "viewer-request"
      lambda_arn   = arn:aws:lambda:us-east-1:003374733998:function:sortlog-lambdaedge:7
      include_body = false
  }
}



