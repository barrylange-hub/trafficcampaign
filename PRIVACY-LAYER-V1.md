# Privacy Layer v1

## What this adds
- First-visit privacy banner
- Equal visible choices: Decline analytics / Allow analytics
- First-party localStorage preference only
- Reopenable Privacy Settings from the footer
- Analytics defaults to OFF
- Updated privacy policy matching current behavior
- No Google Analytics, GTM, Meta Pixel, session replay, heatmaps, ad pixels, or third-party tracking added

## Important architecture rule
Future analytics code must read the saved preference and MUST NOT load unless:
`tc_privacy_v1 === "analytics"`

The consent component emits:
`tc-consent-changed`
with `{ analytics: true|false }`

This is intentionally a consent foundation only. It does not install analytics.
