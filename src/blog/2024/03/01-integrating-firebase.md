---
title: "coffee_ Rebuild: Integrating Firebase"
description: Part 5. I start integrating firebase anonymous authentication and security rules.
date: 2024-03-01
videoID: XNdwWyNjg3I
tags: 
  - post
  - video
categories:
  - devLog
  - liveStream
  - coffeeApp
  - swift
  - firebase
canonicalURL: "https://heyjaycodes.com/coffee-rebuild-integrating-firebase"
heroImage: "https://thorgi.heyjay.lol/hjc/thumbnails/coffee_%20stream-20240301.jpg"
---

At the beginning of the year, I wanted to rebuild [`_coffee`](https://heyjay.url.lol/coffeetrackergh) to include a few other features, watch [this video](https://youtube.com/live/nkVbtRdgF8E?feature=share) for more context. As part of this rebuild, I wanted to completely rethink how I stored the data and introduce a way for users to create a pool of coffee data. Today, I took a good first step towards that and started working with [Firebase](https://firebase.google.com/) and anonymous accounts.

## Why Firebase?

I mentioned this in the video, but the main reason is so that I can just get something done and shipped. Firebase has storage, data management, and user access really easily accessible and I'm familiar with it so I decided that's the route I want to go.

It is also really easy to iterate with whether I want to do that locally using emulators or live since I have no users. My plan once I do get users is to have a production version of the firebase console so that I can still play with live data, but that's a bit further away.

Another bonus to Firebase is that the cost can somewhat be managed. I'm not sure how I want to monetize `coffee_` yet. I don't really want to introduce subscriptions, so my solution to data management needed to be low cost until I figured that out.

## What's the plan for accounts?

I did implement [anonymous accounts](https://firebase.google.com/docs/auth/ios/anonymous-auth). It was the quickest way to start getting the user's data into firebase. I didn't want to build any UI for accounts yet cause that's a lot of work, so I went straight to anonymous accounts. My plan is to allow for users to sign in with apple and email at some point.

## What's being built next?

I stopped working while trying to get bean info to store in [Firestore](https://firebase.google.com/docs/firestore), so I'll pick up there next week. The plan is to get beans writing to Firestore and get that info to come back into the app via Snapshot listeners.

> If this project excites you and you're wanting to help me, the project is [open sourced](https://heyjay.url.lol/coffeetrackergh) and there are a couple issues I can use help on. Those are marked as "Help Wanted" in issues.