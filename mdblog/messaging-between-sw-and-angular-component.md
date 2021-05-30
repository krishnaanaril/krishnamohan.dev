---
title: 'Messaging between Service Worker and Angular component'
description: 'Most of the time service worker logic and application logic work in isolation, but there will be cases where we need to do pass messages between them. In this post we’ll see how we can do this in an angular application.'
published: false
publishedAt: 2021-02-23T00:00:00.000Z
updatedAt: 2021-05-23T00:00:00.000Z
category: tech
image: 'assets/banners/32'
keywords:
    - 'Service Worker'
    - PWA
    - Angular
authors:
    - 'Krishna Mohan A M'
slugs:
    - ___UNPUBLISHED___kp47oe4i_qw6Wdc6nZdAdurcsTNKpUQGELSwZXiz2
---

Most of the time service worker logic and application logic work in isolation, but there will be cases where we need to do pass messages between them. For example we are using background sync and to let the application know that it is complete, we can send a message from service worker and receive it in the application. In this post we’ll see how we can do this in an angular application.

## Prerequisite

1.	Basic understanding of Angular application architecture
2.	Basic understanding of PWA and service workers
3.	VS Code and @angular/cli installation

