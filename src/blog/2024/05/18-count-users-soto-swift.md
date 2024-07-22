---
title: "How to get count of all Users in DynamoDB using Swift and Soto"
description: This is just a short code snippet so that I can reference it later. Subscribe for more snippets and other thoughts.
publishDate: 2024-05-18
tags:
  - post
  - article
categories:
  - aws
  - dynamodb
  - swift
canonicalURL: "https://heyjaycodes.com/how-to-get-count-of-all-users-in-dynamodb-using-swift-and-soto"
---
This was made using [Soto v7.0.0-rc1](https://github.com/soto-project/soto).

Assuming that your Partition Key and Sort Key are named `PK` and `SK` in your table. Also that your PK for all users are `USER#`.

```swift
    let input = DynamoDB.QueryInput(
      expressionAttributeNames: ["#p": "PK"],
      expressionAttributeValues: [":pk" : .s("USER#")],
      keyConditionExpression: "#p = :pk",
      select: .count,
      tableName: tableName
    )
    let output = try await dynamoDB.query(input)
    nextAvailableID = output.count ?? 1
```

This is just a short code snippet so that I can reference it later. Subscribe for more snippets and other thoughts.