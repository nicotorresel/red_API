const bodyParser = require('body-parser')
const express = require('express'),
app = express(),
port = process.env.PORT || 8080;
app.use(bodyParser.json())

const generatorTreeRoute = require('./api/routes/minimum-generator-tree-router');

generatorTreeRoute(app);
app.listen(port);

console.log(`API running on port ${port}`);