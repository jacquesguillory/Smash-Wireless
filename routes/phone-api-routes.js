var db = require("../models");
// Load Chance
var Chance = require('chance');

// Instantiate Chance
var chance = new Chance();

module.exports=function(app){
    app.put("/api/phone/:id", function(req, res){
        db.Phone.update({
            company: req.body.company,
            end_user: req.body.end_user,
            phone_number: req.body.phone_number,
            rateplan: req.body.rate_plan,
            active: req.body.active,
            voice_usage: req.body.voice_usage,
            data_usage: req.body.data_usage,
            sms_usage: req.body.sms_usage,
            device_name: req.body.device_name
        },{
            where:{
                id: req.params.id
            }
        }).then(function(dbPhone){
            res.json(dbPhone);
        });
    });

    app.patch('/api/phone/:id', function(req, res) {
        db.Phone.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function(dbPhone){
            res.json(dbPhone);
        });
    });

    app.get('/api/phone/:UserId', function(req, res) {
		db.User.findById(req.params.UserId)
			.then(function(user) {
				db.Phone.findAll({
					where: {
						UserId: req.params.UserId
					}
				})
				.then(function(platforms) {
					// console.log(platforms);
					res.json(platforms);	
				});
			});
    });
    
    app.get("/api/phones", function(req, res){
        db.Phone.findAll({}).then(function(dbUser){
            res.json(dbUser);
        });
    });
    
    app.post("/api/phones", function(req, res){
        db.Phone.create({
            company: req.body.company,
            end_user: req.body.end_user,
            phone_number: chance.phone(),
            rateplan: req.body.rateplan,
            rateplan_gb: req.body.rateplan_gb,
            active: true,
            voice_usage: chance.integer({min: 1, max: 1000}),
            data_usage: chance.integer({min: 1, max: 20}),
            sms_usage: chance.integer({min: 200, max: 2000}),
            device_name: req.body.device_name,
            device_type: "Phone",
            UserId: req.body.UserId
        }).then(function(dbPhone){
            res.json(dbPhone);
        })
    });  

    app.put("/api/phones", function(req, res){
        db.Phone.update({
            rateplan: req.body.rateplan,
            rateplan_gb: req.body.rateplan_gb},
            {where: {
                id: req.body.id
            }
        }).then(function(dbPhone){
            res.json(dbPhone);
        });
    });  
}
