const http = require("http"); 
const fs = require("fs"); 
const port = 3000; 
http.createServer((req, res) => { 
if (req.url === '/') { 
fs.readFile("home.html", (err, data) => { 
if (err) { 
res.writeHead(200, { "content-type": 'text/html' }); 
res.write('<h1>internal error</h1>'); 
res.end(); 
} 
else { 
res.writeHead(200, { "content-type": 'text/html' }); 
res.write(data); 
res.end(); 
} 
}) 
} 
else if (req.url === '/about') { 
fs.readFile("about.html", (err, data) => { 
if (err) { 
res.writeHead(200, { "content-type": 'text/html' }); 
res.write('<h1>internal error</h1>'); 
res.end(); 
} 
else { 
res.writeHead(200, { "content-type": 'text/html' }); 
res.write(data); 
res.end(); 
} 
}) 
} 
else if (req.url === '/contact') { 
fs.readFile("contact.html", (err, data) => { 
if (err) { 
res.writeHead(200, { "content-type": 'text/html' }); 
res.write('internal error'); 
res.end(); 
} 
else { 
res.writeHead(200, { "content-type": 'text/html' }); 
res.write(data); 
res.end(); 
} 
}) 
} 
else { 
res.writeHead(404, { "content-type": 'text/html' }); 
res.write('<h1>page not found</h1>'); 
res.end(); 
} 
}).listen(3000, () => { 
console.log("server running successfully "); 
}) 