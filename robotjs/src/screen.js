// Get pixel color under the mouse.
var robot = require("robotjs");

// Get mouse position.
var mouse = robot.getMousePos();

// Get pixel color in hex format.
var hex = robot.getPixelColor(mouse.x, mouse.y);
console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);

var size = 10;
// var img = robot.screen.capture(0, 0, size, size);
var img = robot.screen.capture();
// Support for higher density screens.
var multi = img.width / size;
// Get color at 2, 3.
var color = img.colorAt(2 * multi, 3 * multi);