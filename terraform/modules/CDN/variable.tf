variable "CDN_domain_name" {
  description = "Domain_name Must be unique."
  type        = string
}
variable "url"{}
# variable "oai_access"{}
variable "acm_certificate_arn" {
  description = "certificate arn"
  type        = string
}
variable "bucketname"{}
variable "app_env"{}