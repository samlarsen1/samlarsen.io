


resource "cloudflare_record" "dev" {
  zone_id = data.cloudflare_zone.dev
  name   = var.domain
  value = "203.0.113.10"
  type = "A"
  proxied = true
}

# Look for a single zone that you know exists using an exact match.
data "cloudflare_zone" "dev" {
  name = var.domain
}