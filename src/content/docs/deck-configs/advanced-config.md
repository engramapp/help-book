---
title: Advanced Options
---

:::caution
It is recommended to only modify these settings if you know what you are doing.
:::

### Learning Steps
Controls the steps taken until new cards move from "Learning" state to "Reviewing" state.
<!-- Controls the number of learning repetitions, and the delay between them.  -->

Each time you click <span class="answer-good">Good</span> during review, the card moves to the next step. Each time you click Again, the card goes back to the first step.

For example, let's say that your learning steps are **1m 10m 1d**.
- When you click <span class="answer-again">Again</span>, the card goes through the first step, and is shown again 1 minute later.
- When you click <span class="answer-good">Good</span> on a new card or after the 1 minute step, it moves to the next step, and is shown again in 10 minutes.
- When you click <span class="answer-good">Good</span> on a card after the 10 minute step, it is delayed until the next day.
- When you click <span class="answer-good">Good</span> on the card the next day, it graduates and becomes a review card. The card is shown again after the delay configured by the graduating interval.

The Hard button works differently depending on which step you're on.

When you're on the first step, the Hard button shows a delay of 6m. The 6m delay is the average of first two steps: 2m 10m.
> **Exception**: When there's only one learning step, Hard button shows a delay 1.5 times that step. This delay is at most 1 day longer than the learning step.

When you're on any other step, the Hard button repeats that step.

If there’s nothing else to study, Engram will show learning cards up to 20 minutes early by default. To turn this off, see [Review Preferences](/).

### Relearning Steps
The same as learning steps, but for lapsed cards. When you fail a review card (press Again), the card goes through relearning steps, before it becomes a review card again.

When you click <span class="answer-again">Again</span> on a review card, it is called a lapse.

### Review Sort Order
Same as in basic options.

### New Card Sort Order
Same as in basic options.

### New VS Review Order
Determines how to sort between new and review cards when reviewing.

### Interday Learning/Review Order
Determines how to sort between re-learing and review cards when reviewing.

Learning cards tend to be harder than review cards, so some users might prefer to see them at the end (getting the easy stuff done first), or at the start (allowing more time to review forgotten ones).

### Desired Retention
Same as in basic options.

### Automatic Optimization
When enabled, the FSRS parameters for this configuration will be automatically updated.

### Optimize FSRS Parameters
The FSRS optimizer uses machine learning to learn your memory patterns and find parameters that best fit your review history. To do this, the optimizer requires several reviews to fine-tune the parameters.

When you click the Optimize button, FSRS will analyze your review history, and generate parameters that are optimal for your memory and the content you're studying. If you have decks that vary wildly in subjective difficulty, it is recommended to assign them separate presets, as the parameters for easier decks will be different from harder decks. There is no need to optimize your parameters frequently: once every few months is sufficient.

By default, parameters are calculated from the review history of all decks using the current preset. You can optionally adjust the search before optimizing the parameters, if you'd like to change which cards are used for optimization.

You can also optimize the parameters for all of your presets at once, by clicking on the down arrow in the top right corner of the deck options window, then choosing Optimize All Presets.

### FSRS Parameters
FSRS parameters affect how cards are scheduled. Do not change the parameters manually or copy them from someone else.

### Historical Retention
The likelihood you are to remember cards when they are reviewed. Increasing this value will increase workload by showing cards more frequently, while decreasing will decrease workload by showing cards less frequently.