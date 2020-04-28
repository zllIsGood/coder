
var img = require("imagejs");

// Create a bitmap filled with green
var greenBitmap = new img.Bitmap({width: 100, height: 100, color: {r: 0, g: 255, b: 0, a: 255}})
greenBitmap.writeFile("image.jpg", { quality:75 })
    .then(function() {
       console.log(' bitmap has been saved')
    });
console.log(img)