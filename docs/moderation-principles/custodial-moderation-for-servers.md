---
title: Custodial Moderation for Homeservers
description: Documentation regarding the principles of custodial moderation as applied to homeservers.
sidebar_position: 1
---

## What is custodial moderation?

That is a likely first question when opening this document for the first time. This concept is described in Cats [blog post](https://neko.support/blog/2025-07-11/cats-views-on-moderation-terminology) on the matter.

This document goes into how these principles are applied for homeservers and their position. Depending of if the homeserver is dedicated or generic.

## Custodial Moderation for Homeservers

Custodial moderation for homeservers starts with the basic recognition that your admins are not automatically moderators. Yes, due to Synapse admin API restrictions, all homeserver admins are also homeserver moderators and vice versa.

This materialises in that you separate moderator issues and support requests for example. Password resets and alias transfers are administrative operations. Suspensions / Bans, now that’s Moderator territory.

### Homeserver Janitorial Moderation

Janitorial moderation for homeservers is of utmost importance for your homeservers reputation. Rooms can primarily get this automatically handled via CME and CAT, formally known as "Project Huginn and Muninn Active Threats" but people call it CAT due to the informal acronym "Cats Active Threats".

But homeservers also need to deal with this as well, they are the source of the spam that the mentioned lists stop. Due to developments like suspend on policy in Draupnir you can outsource Janitorial moderation to Policy lists in part.

Still, if you run a homeserver, especially a public one, you should have a staff of Janitorial moderators who take out the trash.

#### What to look for in Janitorial Staff?

The best trait for your Janitors is ofc that there is a relationship of trust between the homeserver leadership and the trust and safety team and especially the Janitors. But after that, you should look for people who can survive this line of work. Janitors need only 2 traits after all. That they can be trusted and that they can survive this work.

As is mentioned in Cats blog post on this topic, the reason why you only look for these 2 traits primarily in Janitors is actually due to how hard they are to find. Not a lot of people are cut out for this work. And those that are cut out for it have a tendency to have acquired traits that are undesirable for general social interaction. The same tendency for dark humour that has been observed in military / EMT personnel has also been observed in janitorial moderators.

Janitorial moderation has a strong tendency to take a heavy toll. Any level of exposure to the stuff that Janitorial moderators have to clean up is likely to damage the individual.

### Homeserver Custodial moderation

So, what does homeserver custodial moderators do? Well that actually depends on the homeserver type. Public generic homeservers, they primarily have to deal with stuff like telling users to NOT do invite spam and other offenses. Intervene early before shit hits the fan.

But for homeservers that are less generic and public due to that they have at least some community attached, for example envs, they often intersect with the custodial moderation team for the core community dedicated to your homeserver and help foster the culture on both a homeserver and core community level. The best way to prevent your users from turning into threat actors is to make them not want to do it.

#### Private Servers?

Private servers tend to need very little custodial moderation if the users are nice and in this context its recommended to hard use the "treat them like a person" playbook. Small communities where everyone is on a first name basis are the worst place to attempt to hide behind a "moderator" account. You will be spotted and it will just screw with the atmosphere. In an era where AI can unmask you, hiding can increase tensions.

## Tooling

Generally speaking, most of the tooling recommended by the hall has some place in your T&S strategy, but for Custodial Moderation your primary weapon and most effective one is the fact that you as the moderator, are a person. People tend to listen to other people a lot more than they listen to soulless machines, so use that.
