let http = require("http");
// req => what we send to server(params,queryParams,body)
// res => what server will send us back
let fs = require("fs");
let server = http.createServer((req, res) => {
    fs.readFile("data.json","utf-8", (err, data) => {
        if(err) throw err;
res.write(data);
res.end();
    });

});

server.listen(5000);