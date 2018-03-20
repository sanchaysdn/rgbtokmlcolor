var rgbToKml = require('./index');

var rgba = hexToRgbA("#123456");
console.log('rgba = ',rgba);
rgba = rgba.toString();

var kmlColor = rgbToKml.rgbaToKml(rgba);
console.log('KML Color = ',kmlColor);



function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return [(c>>16)&255, (c>>8)&255, c&255].join(',')+',1';
    }
    throw new Error('Bad Hex');
}
