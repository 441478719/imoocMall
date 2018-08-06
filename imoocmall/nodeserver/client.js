let http=require('http');
let util=require('util')
http.get("http://yapi.demo.qunar.com/mock/14142/getsubmit", res => {
  let data = "";

  res.on("data", function(chunk) {
    data += chunk;
  });
  res.on("end", function() {
    var json = JSON.parse(data);
    console.log(`jason:${util.inspect(json)}`);
  });
});