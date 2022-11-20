##################set Route53 ################################
resource "aws_route53_record" "web-route" {
  zone_id = "Z06225263LROS058F7FRE"//aws_route53_zone.main.zone_id////change 
  name    =  var.url//CName of CDN,var.url aws_cloudfront_distribution.s3_distribution.aliases cannotwork
  type    = "A"

  alias {
    name                   = var.cdndomain//aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = var.hosted_zone_id//aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
# resource "aws_route53_zone" "main" {
#   name = "sortlog.net"
# }
# # # resource "aws_route53_zone" "dev" {
# # #   name = "frontend-tf.sortlog.net"
# # # }

# resource "aws_route53_record" "example" {
#   allow_overwrite = true
#   name            = "frontend-tf3.sortlog.net"
#   ttl             = 30
#   type            = "NS"
#   zone_id         = aws_route53_zone.main.zone_idte

#   records = [
#     aws_route53_zone.main.name_servers[0],
#     aws_route53_zone.main.name_servers[1],
#     aws_route53_zone.main.name_servers[2],
#     aws_route53_zone.main.name_servers[3],
#   ]
# }