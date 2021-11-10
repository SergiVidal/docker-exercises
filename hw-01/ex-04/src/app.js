const express = require('express')
const app = express()
const port = 8080

app.get("/", (req, res) => {
  console.log(`Requested root path!`)
  res.send({ success: true, message: "It is working" });
});

app.listen(port, () => {
  console.log(`NodeJS demo app listening at http://localhost:${port}`)
});