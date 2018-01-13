const express = require('express');

const app = express();

app.use('/public', express.static('public'));
app.use('/bower-libs', express.static('bower_components'));
app.use('/npm-libs', express.static('node_modules'));
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => {
	console.log("Server started at :3000");
});