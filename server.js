const express = require('express'),
app = express(),
port = process.env.PORT || 8080;

const firstRouter = require('./api/routes/first-route');

firstRouter(app);
app.listen(port);

console.log(`API running on port ${port}`);