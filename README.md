# Mouse Tracker

This project is a simple yet effective mouse tracker implemented in JavaScript. It tracks the movement of the mouse cursor across the webpage and displays the X and Y coordinates in real-time.

## How it works

The script uses the `mousemove` event listener on the entire HTML document to track the cursor's movement. It then updates the position of two lines (one vertical and one horizontal) that intersect at the cursor's current position. The X and Y coordinates of the cursor are also displayed on the page, following the cursor as it moves.

## How to use

To use this script, simply include it in your HTML file and ensure that you have elements with the IDs `line_X`, `line_Y`, and `XYcoordinates`, and classes `Xcoordinates` and `Ycoordinates` in your HTML. These elements will be used to display the lines and coordinates.
