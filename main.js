import credentials from './credentials.json';
require('Font8x12').add(Graphics);
const wifi = require('Wifi');
const ssd1306 = require('SSD1306');
const DC_PIN = 12;
const RST_PIN = 5;

let spi = new SPI();
spi.setup({ mosi: 13, sck: 14 });

function start() {
  display.setFont8x12();
  display.drawString('ESP8266 Crystal Ball', 0, 0);
  display.flip();
}

let display = ssd1306.connectSPI(spi, DC_PIN, RST_PIN, start);

function onConnect(err) {
  if(err) {
    console.log('An error has occured :( ', err.message);
  } else {
    console.log(`Connected with IP : ${wifi.getIP().ip}`);
  }
}

wifi.connect(credentials['ssid'], { password: credentials['password'] }, onConnect);
