function start(){
 g.drawString("Hello World!",2,2);
 g.flip();
}

var s = new SPI();
s.setup({mosi: 13, sck: 14});
var g = require("SSD1306").connectSPI(s, 12 /* DC */, 5 /* RST */, start);
