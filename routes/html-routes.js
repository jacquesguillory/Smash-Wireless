var path = require('path');
var db= require("../models");
// Routes
// =============================================================
module.exports = function(app) {

	app.get('/', function(req, res) {

		db.User.findAll({}).then(function(dbUser){
			// console.log(dbUser);
			res.render('index', {Users: dbUser});	
		});
	});

	app.get('/platform/addline/:UserId', function(req, res) {
		db.User.findById(req.params.UserId)
		.then(function(user){
		res.render('addline', {user: user});
		});
	});

	app.get('/platform/adduser/', function(req, res) {
		res.render('adduser');
	});	

	app.get('/platform/:UserId', function(req, res) {
		db.User.findById(req.params.UserId)
			.then(function(user) {
				db.Phone.findAll({
					where: {
						UserId: req.params.UserId
					}
				})
				.then(function(platforms) {
					// console.log(platforms);
					res.render('platform', {platforms: platforms, user: user});	
				});
			});
	});
}


