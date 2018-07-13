var db = require("../models");

module.exports = function(app){
    app.get("/api/users", function(req, res){
        db.User.findAll({}).then(function(dbUser){
            res.json(dbUser);
        });
    });
    app.post("/api/users", function(req, res){
        db.User.create({
            username: req.body.username,
            user_password: req.body.user_password,
            company: req.body.company,
            account_number: req.body.account_number,
            discount: req.body.discount
        }).then(function(dbUser){
            res.json(dbUser);
        })
    });  
};