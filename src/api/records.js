import { Router } from 'express';
const ObjectId = require('mongodb').ObjectId;
const router = new Router();

router.get('/all', function(req, res) {
	let db = req.db;
	let records = db.get('records');
	records.find({}, {}, function(e, data){
		res.json(data);
	});
});

router.get('/single/:id', function(req, res) {
	let db = req.db;
	let records = db.get('records');
  let singleId = new ObjectId(req.params.id);
	records.find({ _id: singleId }, {}, function(e, data){
		res.json(data);
	});
});

router.post('/new', function(req, res) {
	let db = req.db;
	let records = db.get('records');
	records.insert(req.body, function(err, result){
		res.send(
			(err === null) ? {msg: ''} : {msg: err}
		);
	});
});

export default router;