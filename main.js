require('Font8x12').add(Graphics);
const wifi = require('Wifi');
const ssd1306 = require('SSD1306');
import credentials from './credentials.js';

function start() {
  g.setFont8x12();
  g.drawString('ESP8266 Crystal Ball',0,0);
  g.flip();
}

let s = new SPI();
s.setup({mosi: 13, sck: 14});
const g = ssd1306.connectSPI(s, 12 /* DC */, 5 /* RST */, start);

function onConnect(err) {
  if(err) {
    console.log("An error has occured :( ", err.message);
  }
  else {
    console.log("Connected with IP : ", wifi.getIP().ip);
  }
}

wifi.connect(credentials['ssid'], { password: credentials['password'] }, onConnect);
