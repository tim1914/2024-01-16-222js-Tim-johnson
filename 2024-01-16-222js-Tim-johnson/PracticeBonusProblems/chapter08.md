# Bonuses for Chapter 8

## Bonus Part 1

1. In your ch08 directory create a file called bonus.html

1. Create a paragraph element that states "the current time is..." with an empty span with an id of currentTime so that it can be targeted.

1. Create a button that reads Start Clock. 

1. Assign a function called startClock to the button's click event that calls a function you will write called startClock().

1. Create the startClock function so that an interval function starts that updates the  that updates the span element every second with the current time. 

1. Test that this code works. 

1. Add a stop button that cancels the interval. You can stop the interval by calling clearInterval passing the  value returned when you call setInterval.

## Bonus Part 2

1. Update your previous code to add a div that when you hover displays the current time. (use mouseover)

## Bonus Part 3

1. Update your previous code so the stop button is not in the DOM until the clock is started.

1. When the clock is stopped remove the Stop button.

1. Assign a keyboard shortcut to start / stop clock.

## Bonus Part 4

1. Create copies of your elements and give them new id values. Now instead of removing from teh DOM, use CSS to hide the buttons when they are not needed.