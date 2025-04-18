---
title: Callouts
---

Use callouts to include additional content without breaking the flow of your notes.

To create a callout, add [!note] to the first line of a blockquote, where `note` is the type identifier. The type identifier determines how the callout looks and feels. To see all available types, refer to [Supported types](/cards/editing-and-formatting/callouts#Supported%20Types).

    > [!note]
    > Here's a callout block.
    > It supports **Markdown**

### Change the title
By default, the title of the callout is its type identifier in title case. You can change it by adding text after the type identifier:

    > [!tip] Callouts can have custom titles
    > Like this one.

You can even omit the body to create title-only callouts:

    > [!note] Title-only callout.


### Foldable Callouts
You can make a callout foldable by adding a minus (-) directly after the type identifier.

A minus sign collapses a callout.

    > [!hint]- Are callouts foldable?
    > Yes! In a foldable callout, the contents are hidden when the callout is collapsed.

### Customize callouts

Community themes can define custom callouts, or even overwrite the default configuration.

To define a custom callout, create the following CSS block:
```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

The value of the data-callout attribute is the type identifier you want to use, for example [!custom-question-type].

`--callout-color` defines the background color using numbers (0–255) for red, green, and blue.
`--callout-icon` can be an icon ID from lucide.dev, or an SVG element.

:::note[Note about lucide icon versions]
Engram updates Lucide icons periodically. The current version included is shown below; use these or earlier icons in custom callouts.

**Version 0.446.0**
ISC License
> Copyright (c) 2020, Lucide Contributors 
:::

<h1 id="Supported Types">Supported Types</h1>
You can use several callout types and aliases. Each type comes with a different background color and icon.

Unless you Customize callouts, any unsupported type defaults to the note type. The type identifier is case-insensitive.

Currently recognized values are as follows:
- warning
- tip
- success
- hint
- quote
- caution
- error