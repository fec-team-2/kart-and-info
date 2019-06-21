const db = require('./dbHelpers/db.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = process.env.PORT || 3006;
const host = '127.0.0.1';

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(express.static('public'));

// - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
}); // - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -

// - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -
app.get('/items/:id', function (req, res) {
	// this route is pretty smart. you can either pass the array value which corrisponds to the tjnid which on item reads  {tjnid: "tjn-id24"} for example. All that is passed in for the id here is 24 in that case. This route is smart because it works equally as well with the item name.
	db.getOne(req.params.id, (err, data) => {
		if (err || data.length === 0) {
			res.status(404).send('error, item not found' + err);
		}
		else {
			res.status(200).send(data);
		}
	});
});
// - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -

// - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -
app.get('/items/', function (req, res) {
	// gets all items in
	db.getAll((err, data) => {
		res.send(data).status(200);
	});
});
// - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -

app.listen(port, () => {
	console.log('slowly strolling at port ' + port);
	// console.log(JSON.stringify(process.env));
});
