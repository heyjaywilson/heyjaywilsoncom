---
title: "Making call outs in GitHub markdown docs"
description: "Examples of how to add call outs to GitHub markdown docs"
date: 2024-05-25
tags: 
  - post
  - article
categories:
  - github
  - documentation
showBuyCoffee: true
---

I like to decorate my PRs with notes and warnings. [GitHub](https://github.blog/changelog/2023-12-14-new-markdown-extension-alerts-provide-distinctive-styling-for-significant-content/) supports this with special styling. I can never remember the markdown syntax for it, so here's a post.

```txt
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```

They render like this

![GitHub example](https://share.heyjay.lol/github-example.png)