
resource "aws_s3_bucket" "s3_bucket" {
  bucket = "${var.bucketname}-${var.app_env}"
}

resource "aws_s3_bucket_acl" "s3_bucket" {
  bucket = "${var.bucketname}-${var.app_env}"

  acl = "private"
}

resource "aws_s3_bucket_public_access_block" "s3_bucket" {
  bucket = "${var.bucketname}-${var.app_env}"
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_policy" "s3_bucket" {
  bucket = "${var.bucketname}-${var.app_env}"
  policy = data.aws_iam_policy_document.s3_policy.json
}

data "aws_iam_policy_document" "s3_policy" {
    statement {
    actions   = ["s3:GetObject"]
    resources = ["${var.bucketarn}/*"]//["${aws_s3_bucket.s3_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = ["${var.oai_iam_arn}"]//[aws_cloudfront_origin_access_identity.my_origin_access_identity.iam_arn]
    }
  }
}



