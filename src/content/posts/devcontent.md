---
title: Updated my Site with Astro + Netlify
pubDate: 2024-04-20
description: "After 4 years of my website being inactive... I finally decided to update it. I'm using Astro and Netlify to host my site and the process was really easy!"
author: "Lewis Menelaws"
image:
  url: "/images/thumbnail.png"
  alt: "Astro supports fast, automatic RSS feed generation."
tags: ["content creation", "youtube", "programming", "meta"]
---

## Out with the Old, In with the New
My previous developer portfolio was showcasing "Tech to learn in 2020"... clearly, it was time for a much-needed refresh. After some digging into the latest trends and technologies, I decided to give Astro a whirl. Astro has gained popularity for creating content-focused websites, and its compatibility with Netlify seemed perfect for my needs.

## Choosing a Theme
Design is not my strongest suit, so I opted to start with a pre-existing theme. I settled on a minimal theme that incorporates Tailwind CSS because of its simplicity and flexibility. The first task was to dismantle the theme and selectively piece together elements that resonated with my style and needs.

## Testing and Deployment with Netlify
Next, I tackled deployment. I set up a separate branch for a test version of the site on Netlify. This approach allowed me to manage versions effectively, as Netlify automatically deployed the new site, enabling me to make changes freely before merging them into the main branch. However, the initial tests revealed poor Lighthouse performance scores, prompting me to optimize my images to enhance the site's speed and efficiency.

## Adding Interactive Features
One specific functionality I wanted was to track my subscriber count periodically. To achieve this, I crafted a Netlify function using TypeScript and the lambda syntax, which would update my subscriber count every few days automatically.

## Reflection
With the redesign complete and everything set to run smoothly, one lingering question remains—will anyone visit my new website? Only time will tell, but I'm optimistic and excited to share this new chapter of my developer journey with the world.