# TrafficCampaign v2 — Clean Rebuild

A deliberately simple production build for TrafficCampaign.com.

## Stack

- Next.js 16.2.12
- React 19.1.1
- Plain CSS
- Markdown articles stored in `/content/articles`
- No CMS SDK
- No Tailwind
- No third-party UI libraries

## Deploy to GitHub + Vercel

1. Create a new empty GitHub repository named `trafficcampaign`.
2. Upload **all files and folders from this project root** to the repository.
3. In Vercel, choose **Add New → Project** and import the GitHub repository.
4. Framework should be detected automatically as Next.js.
5. Do not add environment variables.
6. Click **Deploy**.

## Publishing a new article

Duplicate one of the files in `/content/articles` and rename it with the URL slug you want:

`my-new-guide.md`

Edit the frontmatter at the top, then write the article below it using ordinary Markdown.

When you commit the file to GitHub, Vercel rebuilds the site automatically. The article is automatically added to:

- `/articles`
- its category page
- `/sitemap.xml`
- `/rss.xml`
- `/llms.txt`
- `/llms-full.txt`

No separate CMS is required.

## Important URLs after deployment

- `/sitemap.xml`
- `/robots.txt`
- `/llms.txt`
- `/llms-full.txt`
- `/rss.xml`

## Philosophy

Keep dependencies minimal. Add a new dependency only when it solves a problem that cannot reasonably be solved with the platform itself.
