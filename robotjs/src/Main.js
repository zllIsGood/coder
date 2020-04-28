// Get pixel color under the mouse.
var robot = require("robotjs");
var imagejs = require("imagejs");


var size = 10;
// var img = robot.screen.capture(0, 0, size, size);
var img = robot.screen.capture();
// Support for higher density screens.
let w = img.width
let h = img.height

var bitmap = new imagejs.Bitmap({ width: img.width, height: img.height });

let len = w * h * 4
for (let i = 0; i < len; i++) {
    bitmap._data.data[i] = img.image[i]
}
// for (let i = 0; i < w; i++) {
//     for (let j = 0; j < h; j++) {
//         let color = img.colorAt(i, j)
//         let co = colortran(color)
//         var rgb = { r: co&0xff0000, g: co&0x00ff00, b: co&0x0000ff }; // alpha defaults to 255
//         bitmap.setPixel(i, j, rgb);
//     }
// }

bitmap.writeFile("screen.jpg", { quality: 75 })
    .then(function () {
        console.log(' screen has been saved')
    });


function colortran(str) {
    let s = '0x' + str
    let num = Number(s)
    return num
}