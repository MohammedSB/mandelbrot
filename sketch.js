import "./p5.js";

function setup() {
    createCanvas(360, 240);
    pixelDensity(1);
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            pixels[pix+0] = 51;
            pixels[pix+1] = 51;
            pixels[pix+2] = 51;
            pixels[pix+3] = 255;
        }
    }
}

setup();