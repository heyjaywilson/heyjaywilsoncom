---
title: "coffee_ Rebuild: Writing beans to firebase"
description: Part 6. Wrote bean data to firebase and we discussed motivation around site projects.
publishDate: 2024-03-08
videoID: hX05vvUNlLU
tags: 
  - post
  - video
categories:
  - devLog
  - liveStream
  - coffeeApp
  - swift
  - firebase
canonicalURL: "https://heyjaycodes.com/coffee-rebuild-writing-beans-to-firebase"
heroImage: "https://thorgi.heyjay.lol/hjc/thumbnails/coffee_%20stream-20240308.jpg"
---

This was a great stream! Had some people pop in the chat that I haven't talked to in awhile which was nice. We also had a good discussion around motivation and having a ship it attitude.

## What happened on stream?

A few things happened. The first one was fixing a crash since I was trying to access firebase before it was configured. This was easily mitigated with a wrapper view. Then I worked on writing bean information to the user's beans collection and started trying to read it into the app.

### Writing bean information

I had an issue with writing bean information to the app. This mainly came from my security rules being wrong. I wasn't wild carding correctly to only allow the user who's document it was to access it.

This was the rule I ended with. It allows for any document inside a user's collection to only be read or written to if the user is logged in and it is the proper userID.

```js
     match /users/{userId}/{collection}/{document=**} {
      allow read, update, delete: if request.auth != null && request.auth.uid == userId;
      allow create: if request.auth != null;
    }
```

### Reading snapshots

I started reading snapshot data, but I had to stop my work on that this week due to timing. Also, I was having a hard time converting the document data to a `Bean`. Next week that should be resolved.

## The ship it attitude

This conversation was great. [Mono_NZ](https://www.twitch.tv/mono_nz) and [Mikaela Caron](https://mikaelacaron.com) were talking about just shipping things in the chat which lead to us discussing the "ship it attitude."

I describe the "ship it attitude" as a frame of mind to actually complete and publish a project. This also frames how you complete the project and usually requires to pair down the project into it's bare necessities so that it can be iterated on quickly based on user feedback.

I personally have a hard time with this attitude because I get really stuck in project structure and a bunch of things that end up not mattering to the user. Having this discussion really helps me put my development method into perspective and how I need/want to adopt more of the ship it attitude and get projects out.

This rewrite is actually a perfect example of me adjusting to have the "ship it attitude." I was really thinking about what database to use and opted for firebase for ease of use even though deep down I really wanted to build my own server for the experience. I decided that wasn't going to be great for the project or cause this to be shipped out in a timely manner and opted for firebase.

## What's happening next week?

I'm going to figure out how to get the snapshat data into a `Bean` structure and get that to be what populates the `BeanListView`. If that doesn't take the whole time, I'll work on permissions and the public beans collection.

> If this project excites you and you're wanting to help me, the project is [open sourced](https://heyjay.url.lol/coffeetrackergh) and there are a couple issues I can use help on. Those are marked as "Help Wanted" in issues.