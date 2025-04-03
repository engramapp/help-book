---
title: Overview
---

Engram allows users to connect the Card Wizard to a supported LLM provider to give suggestions that help craft the card to follow [Dr. Piotr Wozniak's 20 Rules of Formulating Knowledge](https://www.supermemo.com/en/blog/twenty-rules-of-formulating-knowledge).

You can view or change the prompt being sent within the `suggestion_prompt` file in the application’s data directory.

**This feature must be enabled**

To enable this feature:
- Open the settings with ` or by clicking the gear icon.
- Select the **LLM Integration** tab.
- Enable the LLM Integrations.
- Select a provider.
- Select a model.
- Provide your API key.

To use this feature, in the Card Wizard:
- Type content into the **Front** and **Back** fields.
- Open the sidebar by pressing `Ctrl+[` (or `Cmd+[` on macOS).
- Select the robot icon.
- Click `Generate Suggestions`

This action sends the prompt with the content in the **Front** and **Back** fields, and suggestions to improve the card is returned.

Supported Providers
---
*version 0.1.0*
- Anthropic