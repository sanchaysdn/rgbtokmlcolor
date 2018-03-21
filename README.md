# rgbtokmlcolor

##Require Module 
 var rgbToKml = require('sdn-rgbtokml'); 

##Convert Hex to RGBA
var rgba = rgbToKml.hexToRgbA("#123456");

##Convert RGBA to string
rgba = rgba.toString(); 

##Finally convert RGBA to KML Color
var kmlColor = rgbToKml.rgbaToKml(rgba);

