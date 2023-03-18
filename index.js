const http= require('http');
const fs=require('fs');
var requests = require('requests');
// requests('https://api.openweathermap.org/data/2.5/weather?lat={23.0333}&lon={72.6167}&appid={b074d91a691e0010f3ef8ce3c5bdc59f}', { streaming })

const homeFile=fs.readFileSync('./home.html','utf-8');
// console.log(homeFile);
const server=http.createServer((req,res)=>{
    if (req.url=="/") {
        requests('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={b074d91a691e0010f3ef8ce3c5bdc59f}}')
.on('data', function (chunk) {
  console.log(chunk);
})
.on('end', function (err) {
  if (err) return console.log('connection closed due to errors', err);
 
  console.log('end');
});
    }

});

server.listen(3000,"127.0.0.1")