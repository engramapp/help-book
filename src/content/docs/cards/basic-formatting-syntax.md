---
title: Basic Formatting Syntax
---

Learn how to apply basic formatting to your notes, using [Markdown](https://daringfireball.net/projects/markdown/).

Paragraphs
---
To create paragraphs in Markdown, use a blank line to separate blocks of text. Each block of text separated by a blank line is treated as a distinct paragraph.

This is a paragraph.

This is another paragraph.

This is a paragraph.

This is another paragraph.

A blank line between lines of text creates separate paragraphs. This is the default behavior in Markdown.

Line breaks
---
By default in Engram, pressing Enter once will create a new line in your note, but this is treated as a continuation of the same paragraph in the rendered output, following typical Markdown behavior. To insert a line break within a paragraph without starting a new paragraph, you can use the shortcut Shift + Enter to directly insert a line break.

Headings
---
To create a heading, add up to six # symbols before your heading text. The number of # symbols determines the size of the heading.

    # This is a heading 1
    ## This is a heading 2
    ### This is a heading 3
    #### This is a heading 4
    ##### This is a heading 5
    ###### This is a heading 6

# This is a heading 1
## This is a heading 2
### This is a heading 3
#### This is a heading 4
##### This is a heading 5
###### This is a heading 6
**Bold**, *italics*

Text formatting can also be applied using Editing shortcuts.

| Style | Syntax | Example | Output |
| ----- | ------ | ------- | ------ |
| Bold | ** ** or __ __ | `**Bold text**` | **Bold text** |
| Italic | * * or _ _ | `*Italic text*` | *Italic text* |
| Strikethrough | ~~ ~~ | `~~Striked out text~~` | ~~Striked out text~~ |

External links
---
Engram supports linking markdown files, known as *Wikilinks*, and external URLs:

    Wikilink: [[Three laws of motion]]
    External URLs: [Three laws of motion](/)

You can also create external links to files in platforms like [Obsidian](https://obsidian.md), by linking to a file URI.

    [Note](obsidian://open?vault=MainVault&file=Note.md)

#### Escape blank spaces in links

If your URL contains blank spaces, you must escape them by replacing them with %20.

    [My Note](obsidian://open?vault=MainVault&file=My%20Note.md)

External images
---
You can add images with external URLs, by adding a ! symbol before an external link.

    ![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Quotes
---
You can quote text by adding a > symbols before the text.

    > Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

:::tip
You can turn your quote into a [callout](/cards/callouts) by adding [!note] as the first line in a quote.
:::

Lists
---
You can create an unordered list by adding a - before the text.

    - First list item
    - Second list item
    - Third list item

To create an ordered list, start each line with a number followed by a . symbol.

    1. First list item
    2. Second list item
    3. Third list item

Horizontal rule
---
You can use three stars `***` or hyphens `---` on its own line to add a horizontal bar.

    ***
    ---

Code
---
You can format code both inline within a sentence, or in its own block.
Inline code

You can format code within a sentence using single backticks.

Text inside backticks on a line will be formatted like code.
    
    Formatted `like` this.

Text inside backticks on a line will be formatted like code.

If you want to put backticks in an inline code block, surround it with double backticks like so: inline code with a backtick ` inside.
Code blocks

To format a block of code, surround the code with triple backticks.

    ```
    cd ~/Desktop
    ```

You can add syntax highlighting to a code block, by adding a language code after the first set of backticks.

    ```js
    function fancyAlert(arg) {
        if(arg) {
            console.alert(arg)
        }
    }
    ```

```js
function fancyAlert(arg) {
    if(arg) {
        console.alert(arg)
    }
}
```