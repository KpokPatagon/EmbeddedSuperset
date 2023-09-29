# The required secret key
SECRET_KEY = 'OOxqKs9QcMEjaIbdtXzXVFpW/VrvqQGhgZx6ZCbjN1tGO1qBhY2Z5iT2'

# Enable/disable CSP warning
CONTENT_SECURITY_POLICY_WARNING = False

# Removes Content Security Policies, only for testing purposes.
TALISMAN_ENABLED = False

# Disables CSRF, only for testing purposes.
WTF_CSRF_ENABLED = False

# Enable Embedded Features
FEATURE_FLAGS =  {
  "EMBEDDED_SUPERSET": True,
  "DASHBOARD_RBAC": True,
}

GUEST_TOKEN_JWT_SECRET = "Qm2SNlyuQXlnu6fWmwcc46fKVniUWjxuIsnA6Wo4g3g="
SESSION_COOKIE_SAMESITE = None
PUBLIC_ROLE_LIKE_GAMMA = True

CORS_OPTIONS = {
  'supports_credentials': True,
  'allow_headers': ['*'],
  'resources': ['*'],
  'origins': ['*']
}
