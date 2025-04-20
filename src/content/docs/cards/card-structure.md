---
title: Card Structure
sidebar:
    order: 0
---

Cards in Engram are split by **Front**, **Back**, and **Context** fields for simplicity, speed and depth during the card creation process.

- The **Front** is displayed as the first side of the card you will be shown, typically a question.
- The **Back** is displayed the back side of the card, typically an answer.
- The **Context** is for additional information on that card.

Engram's [themes](/extending-engram/themes) and [plugins](/extending-engram/community-plugins) can be used to further customize how text and cards are rendered.

Card Types
---
Engram currently supports 3 card types.

1. **Standard** - A standard front-to-back flashcard, that can also be reversed to automatically create 2 cards.
2. **Cloze** - A cloze deletion card, also referred to as a "fill-in-the-blank" question.
3. **Mask** - A cloze deletion card but for images.

Each card type can be used interchangeably to create high-quality decks.

### Cloze Cards

Cloze Cards are essential to creating a strong deck. To create a cloze card, select the `Cloze` type in the card wizard.

:::tip
The cloze type can be quickly switched by using `cmd + 2` on the keyboard.

Learn more about Engram hotkeys [here](/user-interface/hotkeys).
:::

Clozes are created using a double-wrapping bracket: `{{this is clozed}}`.

Each cloze in a card creates an additional card, where each additional card created is studied individually. This allows you to create multiple cards with ease.

For example, the following will create 2 cards:
```
The theory of {{relativity}} assumes that {{the speed of light is constant}}.
```

Result:
```
The theory of ... assumes that the speed of light is constant.
```
```
The theory of relativity assumes that ....
```

Cloze numbering is automatically handled for you, where each cloze will automatically create a new card. 

Automatic numbering can be overwritten by including a `c#::` before the card text. Numbering starts at 0.

For example, the following will create 1 card:
```
The {{left main coronary artery}} sends blood to the {{c0::left side}} of the heart muscle.
```

Result:
```
The ... sends blood to the ... of the heart muscle.
```

:::tip
While creating a cloze card, use `cmd + shift + c` to quickly add a cloze.
:::

### Mask Cards

Masks work similarly to clozes, except are designed for use with **Images**.

To create a mask, simply click and drag the size of the box you want to create. To remove, simply click on the box you want to remove.

Mask numbering is automatically handled for you, increasing with each box drawn. To override this, simply hold the `shift` key while creating a mask.