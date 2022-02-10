
terraform {
  cloud {
    organization = "samlarsen-test"
    workspaces {
      tags = ["samlarsen-io"]
    }
  }
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 3.0"
    }
  }
  required_version = "1.1.5"
}