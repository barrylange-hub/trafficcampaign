---
title: "UTM Parameters Explained Without the Jargon"
description: "Understand what UTM parameters do, which ones matter, and how to keep campaign tracking clean."
date: "2026-08-01"
author: "TrafficCampaign Editorial"
category: "Analytics"
tags: [utm, analytics, tracking]
---
UTM parameters are small labels added to a URL so analytics tools can tell where a visit came from and which campaign produced it.

## The three parameters that matter most

For most campaigns, focus on these:

- **utm_source** identifies the platform or source, such as google or newsletter.
- **utm_medium** identifies the channel type, such as cpc or email.
- **utm_campaign** identifies the specific campaign, such as summer-sale.

## Keep naming consistent

Choose lowercase names and use the same naming convention every time. `facebook`, `Facebook`, and `fb` can become three separate sources in reports even though they mean the same thing.

## Build your URL

You can use the [TrafficCampaign UTM Builder](/tools) to create a properly tagged URL without manually editing query strings.

## What not to tag

Do not add UTMs to internal links on your own website. They can overwrite useful acquisition information and make attribution harder to understand.
