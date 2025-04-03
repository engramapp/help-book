---
title: Basic Options
sidebar:
    order: 1
---

# Daily Limits
Set limits on the number of cards seen every day.

### New Cards/Day
Controls how many new cards can be introduced each day you open the program. If you study fewer than the limit, or miss a day, the next day the counts will be back to their original setting: you won't be given more cards than your limit allows.

Studying new cards will temporarily increase the number of reviews you need to do a day, as newly-learnt material needs to be repeated a number of times before the delay between repetitions can increase. 

If you are consistently learning 20 new cards a day, you can expect your daily reviews to be roughly about 200 cards/day. You can decrease the reviews required by introducing fewer new cards each day until your review burden decreases. 

:::caution
More than one Engram user has excitedly studied hundreds of new cards over their first few days of using the program, and then has become overwhelmed by the reviews required.
:::

### Maximum Reviews/Day
Allows you to set an upper limit on the number of review cards to show each day. 

When this limit is reached, Engram will not show any more **review cards** for the day, even if there are more waiting. If you study consistently, this setting can help to smooth out occasional peaks in due card counts, and can save you from a heart attack when returning to Anki after taking a week off. When reviews have been hidden due to this option, a message will appear in the congratulations screen, suggesting you consider increasing the limit if you have time.

When studying a deck that has subdecks inside it, the review limit behaves similarly to the new card limit.

### Per-Deck Daily Limits
The **New Cards/Day** and **Maximum Reviews/Day** options can be set on a per-deck basis by turning on the **This Deck Only** option.

Alternatively, a deck can be disabled by turning on the **Disabled** option or by setting both limits to `0`.

It is possible to use the same preset for different decks, with customized limits for each of them. This eliminates the need to create cloned presets just for that purpose.

### Review Sort Order
Controls how the review cards are sorted for review.

- Due date, then random: The default order prioritizes cards that have been waiting longer, and it's the recommended order when you are up to date, or when you only have a small backlog. If you have taken an extended break or have fallen behind in your reviews, you may want to consider changing the sort order temporarily.

- **Due date, then deck**: This also prioritizes cards that have been waiting longer, and then shows review cards for each subdeck in turn.
- **Deck, then due date**: Shows review cards for each subdeck in turn. This order is generally not recommended, as having material appear consistently in the same order makes it easier to guess the answer based on context, and leads to weaker memories.
- **Ascending intervals**: Shows cards with shorter intervals first.
- **Descending intervals**: Shows cards with longer intervals first.
- **Ascending ease**: Shows more difficult cards first.
- **Descending ease**: Shows less difficult cards first.
<!-- - **Relative overdueness**: Shows cards that you're more likely to have forgotten first. This is generally recommended if you have a large backlog that may take some time to get through, and you want to reduce the chances of forgetting more cards. -->

With FSRS, overdueness is calculated based on on each card's retrievability, and the desired retention in the deck preset.

### New Card Sort Order
Controls how new cards are sorted for review.

- **Card type**, then order gathered: Shows cards in order of card type number. Cards of each card type number are shown in the order they were gathered. If you have sibling burying disabled, this ensures all front→back cards are seen before any back→front cards. This order is useful if you don't want sibling cards to appear too close to each other.
- **Order gathered**: Shows cards exactly as they were gathered. If sibling burying is disabled, this typically results in all sibling cards appearing one after the other.
- **Card type, then random**: Shows cards in order of card type number, but shuffles the cards of each card type number. This order is useful if you don't want sibling cards to appear too close to each other, but still want the cards to appear in a random order.
- **Random note, then card type**: Picks notes at random, then shows all of their siblings in order.
- **Random**: Fully shuffles the gathered cards.

### Bury New Siblings
Burying a new sibling will ensure that cards of the same note will be delayed to the next day

When enabled, the sibling that comes earliest in that list will be shown.

### Leech Threshold
Number of times a card can be answered "Again" before being marked as a leech.

A card marked as a leech is meant to represent cards that aren't too difficult to remember and need modifications, whether its editing or deleting the card.

### Max Time to Answer
The maximum time recorded for review in seconds. Extra time is simply discarded.

The time spent reviewing a card is used within FSRS to help determine performance.

### Desired Retention
Desired retention controls the likelihood you are to remember cards when they are reviewed

Increasing this value will increase workload by showing cards more frequently, while decreasing will decrease workload by showing cards less frequently.

The default value of 0.90 will schedule cards so you have a 90% chance of remembering them when they come up for review again. This should normally translate to remembering around 90% cards when they are reviewed, and only failing around 10%.

:::caution
**As desired retention approaches 100%, the workload increases drastically.**

> Imagine you have a card with a 90% chance of remembering it after 100 days. If your desired retention is 0.90, you'll review the card again in 100 days. But if your desired retention is 0.95, you'll need to review it after 46 days instead. This means that the intervals of your cards almost halve at 0.95 desired retention and you need to review cards twice as frequently compared to 0.90 desired retention. At 0.97, the interval will be 27 days (you'll have to review your cards 3.7x as frequently). At 0.99, the interval will be only 9 days (you'll have to review your cards more than 10x more frequently than with the defaults).

As desired retention decreases, you'll forget a greater percentage of your cards, and those cards will need to be reviewed again. Eventually, you'll get to a point where the forgotten cards contribute more to your workload than you gain from the longer delays. Also, keep in mind that forgetting material frequently is demotivating.
:::

### Last Optimized
The date the configuration was last optimized.

Engram automatically manages the optimization of the FSRS parameters for every 1000 reviews, which encompasses all decks using this deck configuration. You can disable automatic optimization or manually optimize the FSRS parameters in the Advanced Tab.