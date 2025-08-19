---
title: Overview
sidebar_position: 1
sidebar_label: Overview
---
Moderation bots on Matrix are most commonly used for protecting rooms.  
Their core functionality is to synchronize server and user bans via policy rooms across the whole community they are deployed to.  
However, as time goes on, the demmands and necessities have grown and so have the capabilities of bots. Today, some bots offer functionality that goes well beyond the basics an can make your own, as well as the life of your staff a lot easier.

## Bots for me and my staff

Moderationbots can be a great complementary T&S tool, not only for room level duties, but also for tasks that usually require admin access to the Matrix server, such as:
* suspending/deactivating user accounts
* shutting down rooms
* receiving and processing reports

When deploying bots like Draupnir, you can easily grant the above mentioned functionailties to a group of staff via the management room without the need to give everyone full server admin level access.

## Bots for my users

Apart from that, offering moderationbots as a service to your users can greatly improve the safety of everyone on Matrix.
Currently the most common ways in which you as a server admin can provide a moderation bot to your users is:
* **single bot for entire server**
    * this requires the homeserver staff to get involved and approve the addition of new rooms to the set of protected rooms for the bot
    * in this setup, the "main" bot can also be used to block invites based on policy lists for all users on the server
    * pro: no additional setup/maintenance 
    * con: this offers no option for the user to chose the applied policy lists or other features themselves  
* **spinning up bots on request**
    * in this scenario, you spin up bots on a per request basis
    * Draupnir, when setup as an appservice allows for self-service like deployment
    * pro: communities have full access to the bots capabilities individually
    * con: possibly higher initial setup work and, depending on the deployment method, higher ongoing effort
  
## Bots we recommend

### [Draupnir](https://github.com/the-draupnir-project/Draupnir)  
Installation methods:
- Manual install
- Docker
- [matrix-docker-ansible-deploy](https://github.com/spantaleev/matrix-docker-ansible-deploy)
- Nix
- K8s
- openSUSE packaging
### [Meowlnir](https://github.com/maunium/meowlnir)
Installation methods:
- Manual install
- Docker