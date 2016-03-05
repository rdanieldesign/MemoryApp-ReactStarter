import { Router } from 'express';
const ObjectId = require('mongodb').ObjectId;
const router = new Router();

// GET All
router.get('/all', function(req, res) {
	let db = req.db;
	let records = db.get('categories');
	records.find({}, {}, function(e, data){
		res.json(data);
	});
});

// DELETE Single
router.post('/delete/:id', function(req, res) {
	let db = req.db;
	let records = db.get('categories');
	let singleId = new ObjectId(req.params.id);
	records.remove( { _id: singleId }, function(err, result){
		res.send(
			(err === null) ? {msg: ''} : {msg: err}
		);
	});
});

// POST New
router.post('/new', function(req, res) {
	let db = req.db;
	let records = db.get('categories');
	records.insert(req.body, function(err, result){
		res.send(
			(err === null) ? {msg: ''} : {msg: err}
		);
	});
});

export default router;