# rgbtokmlcolor
var rgbToKml = require('./index');

var rgba = rgbToKml.hexToRgbA("#123456");
console.log('rgba = ',rgba);
rgba = rgba.toString();

var kmlColor = rgbToKml.rgbaToKml(rgba);
console.log('KML Color = ',kmlColor);
