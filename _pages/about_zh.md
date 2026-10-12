---
layout: about
title: 关于我
permalink: /
lang: zh-CN
nav: false
description: 中文个人主页模板，请将占位内容替换为你的学术背景与研究介绍。
translation_url: /en/
translation_lang: en
translation_label: English
translation_aria_label: 切换至英文首页
language_label: 中文
language_navigation_label: 选择语言
subtitle: "[你的身份] · [所在学院] · [所在学校]"

profile:
  align: right
  image: profile_placeholder.svg
  image_circular: true
  more_info: >
    <p>[所在学院]</p>
    <p>[所在学校]</p>
    <p>[城市，国家]</p>

selected_papers: false
social: false

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
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

## 个人简介

我是 **[你的姓名]**，目前在 **[所在学校]** 的 **[所在学院]** 担任 **[你的身份]**。
我的研究主要围绕 **[研究领域]** 展开，尤其关注 **[你希望解决的问题]**。

## 研究方向

- **[研究方向一]** — [用一句话介绍这个方向]。
- **[研究方向二]** — [用一句话介绍这个方向]。
- **[研究方向三]** — [用一句话介绍这个方向]。

## 教育经历

- **[起始年份–至今]** · [学位]，[学校名称]。
- **[起始年份–结束年份]** · [学位]，[学校名称]。

## 代表性工作

- **[项目或论文标题]** — [简要介绍你的贡献和主要成果]。
- **[项目或论文标题]** — [简要介绍你的贡献和主要成果]。

[查看论文（英文）]({{ '/publications/' | relative_url }}) · [查看简历（英文）]({{ '/cv/' | relative_url }})

## 联系方式

- **邮箱：** [你的邮箱地址]。
- **办公室：** [楼宇、房间号、学校]。
- **合作交流：** [你希望交流的研究问题或合作方向]。
