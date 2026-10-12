---
layout: about
title: About
permalink: /en/
lang: en
description: English homepage template. Replace the placeholders with your academic profile.
translation_url: /
translation_lang: zh-CN
translation_label: 中文
translation_aria_label: Switch to the Chinese homepage
language_label: English
language_navigation_label: Choose a language
subtitle: "[Your position] · [Your department] · [Your university]"

profile:
  align: right
  image: profile_placeholder.svg
  image_circular: true
  more_info: >
    <p>[Your department]</p>
    <p>[Your university]</p>
    <p>[City, Country]</p>

selected_papers: false
social: false

announcements:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<nav aria-label="{{ page.language_navigation_label }}" style="display: flex; min-width: 180px; justify-content: flex-end; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
  <span lang="{{ page.lang }}" aria-current="true" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 14px; font-weight: 600;">
    {{ page.language_label }}
  </span>
  <a
    href="{{ page.translation_url | relative_url }}"
    lang="{{ page.translation_lang }}"
    hreflang="{{ page.translation_lang }}"
    aria-label="{{ page.translation_aria_label }}"
    style="display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 0 14px; border: 1px solid currentColor; border-radius: 6px; text-decoration: none;"
  >
    {{ page.translation_label }}
  </a>
</nav>

## About me

I am **[Your name]**, a **[Your position]** in **[Your department]** at **[Your university]**.
My research focuses on **[Research area]**. I am particularly interested in **[A problem you want to solve]**.

## Research interests

- **[Research direction 1]** — [A short description of the topic].
- **[Research direction 2]** — [A short description of the topic].
- **[Research direction 3]** — [A short description of the topic].

## Education

- **[Start year–Present]** · [Degree], [University].
- **[Start year–End year]** · [Degree], [University].

## Selected work

- **[Project or publication title]** — [Your contribution and a short summary].
- **[Project or publication title]** — [Your contribution and a short summary].

[Browse publications]({{ '/publications/' | relative_url }}) · [View my CV]({{ '/cv/' | relative_url }})

## Contact

- **Email:** [Your email address].
- **Office:** [Building, Room, University].
- **Collaboration:** [Topics you would like to discuss].
