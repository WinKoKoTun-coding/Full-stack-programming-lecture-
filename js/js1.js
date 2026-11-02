const https = require("http")
const fs = require('fs')

const server = https.createServer({ keepAliveTimeout: 60000 }, (req, res) => {
  res.setHeader({"Content-Type":"text/html"})
  fs.readFile('../index.html', (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    }
    res.write(data)
    res.end()
  })
  
  
});



server.listen(8000, "localhost", () => {
  setTimeout(() => {
  console.log("Server is running on port 8000")
  // Closes all connections, ensuring the server closes successfully
  server.closeAllConnections();
}, 2000);
});
// Close the server after 10 seconds
 
