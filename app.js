const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8081;

// Middleware to log requests
router.use(function (req, res, next) {
  console.log('/' + req.method);
  next();
});

// Routes
router.get('/', function(req, res) {
  res.sendFile(path + 'index.html');
});

router.get('/sharks', function(req, res) {
  res.sendFile(path + 'sharks.html');
});


// Serve static files
app.use(express.static(path));

// Use the router for routing
app.use('/', router);

// Start the server
app.listen(port, function () {
  console.log('Example app listening on port 8081!');
});
