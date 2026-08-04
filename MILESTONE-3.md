# Milestone 3 — Content Engine

This release upgrades the stable TrafficCampaign foundation without adding any dependencies.

## Added
- Instant client-side search on /articles
- Table of contents generated from H2 headings
- Breadcrumb navigation + BreadcrumbList schema
- Related articles using category/tag relevance
- Author card and optional authorBio frontmatter
- FAQ sections + FAQPage schema using faq1Question/faq1Answer through faq4Question/faq4Answer
- Ordered-list Markdown support
- Per-article updated date, canonical, and noindex controls
- Improved article mobile layout

## Optional frontmatter
updated: "2026-08-04"
authorBio: "Short author bio."
canonical: "https://www.trafficcampaign.com/articles/example"
noindex: false
faq1Question: "Question?"
faq1Answer: "Answer."

No CMS, environment variables, or new npm packages are required.
