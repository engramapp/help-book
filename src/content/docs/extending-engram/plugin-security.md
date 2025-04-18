---
title: Plugin Security
---

The Engram team takes security seriously. This page explains the risks involved when installing community plugins, and what the Engram team does to address them.

Plugin capabilities
---
Engram follows a least-privileges principle, meaning Engram only has access to it's application directories, and directories you specifically allow for [Imports](/import/importing-local-collections/) and [Linking](/cards/linking-notes) features.

Although access is limited:
- Community plugins can access files in any allowed directories.
- Community plugins can connect to internet.
- Community plugins can install additional programs.

:::tip
If you're working with sensitive data and wish to install a community plugin, we recommend that you perform an independent security audit on the plugin before using it.
:::

Plugin review process
---
Community plugins undergo an initial review when they're submitted to the plugin store. All plugins must adhere to [Engram Developer Policies](https://docs.engramapp.com/developer-policy/).

The Engram team is small and unable to manually review every new release of community plugins. Instead, we rely on the help of the community to identify and report issues with plugins.

- If you discover any minor security vulnerabilities in a community plugin, refer to the plugin author's `security.md` or `readme.md` for how to report those. For Critical category flaws, please report the issue to [Engram support](/) as well.
- If you suspect that a community plugin is malicious, report it to [Engram support](/), or by sending a DM to our moderators.
