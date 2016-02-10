import { Router } from 'express';
const ObjectId = require('mongodb').ObjectId;
const router = new Router();

// GET All
router.get('/all', function(req, res) {
	let db = req.db;
	let records = db.get('records');
	records.find({}, {}, function(e, data){
		res.json(data);
	});
});

// GET Single
router.get('/single/:id', function(req, res) {
	let db = req.db;
	let records = db.get('records');
  let singleId = new ObjectId(req.params.id);
	records.find({ _id: singleId }, {}, function(e, data){
		res.json(data);
	});
});

// UPDATE Single
router.put('/update/:id', function(req, res) {
	let db = req.db;
	let records = db.get('records');
	let singleId = new ObjectId(req.params.id);
	records.update( { _id: singleId }, { $set: req.body }, function(err, result){
		res.send(
			(err === null) ? {msg: ''} : {msg: err}
		);
	});
});

// DELETE Single
router.post('/delete/:id', function(req, res) {
	let db = req.db;
	let records = db.get('records');
	let singleId = new ObjectId(req.params.id);
	records.remove( { _id: singleId }, function(err, result){
		res.send(
			(err === null) ? {msg: ''} : {msg: err}
		);
	});
});

// GET Category
router.get('/category/:type', function(req, res) {
	let db = req.db;
	let records = db.get('records');
	records.find({ type: req.params.type }, {}, function(e, data) {
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