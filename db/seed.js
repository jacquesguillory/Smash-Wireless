var db = require('../models');

db.User.create({
    username: "Steven Segal",
    user_password: "1111111111",
    company: "Arcadis",
    account_number: 990179191,
    discount: 22
}).then(function(dbUser){

});

db.User.create({
    username: "Shailene Woodley",
    user_password: "1111111501",
    company: "Encana",
    account_number: 990112618,
    discount: 21
}).then(function(dbUser){


    db.Phone.create({
        company: "Encana",
        end_user: "Shailene Woodley",
        phone_number: 1118675309,
        rateplan: "Mobile Select 1Gb",
        rateplan_gb: 1,
        active: true,
        voice_usage: 400,
        data_usage: 1,
        sms_usage: 900,
        device_name: "iPhone 7", 
        device_type: "integrated",
        UserId: dbUser.id
    }).then(function(dbPhone){
    });

    db.Phone.create({
        company: "Encana",
        end_user: "Mark Ruffalo",
        phone_number: 1118673459,
        rateplan: "Mobile Select 3Gb",
        rateplan_gb: 3,
        active: true,
        voice_usage: 400,
        data_usage: 3,
        sms_usage: 900,
        device_name: "iPhone 6S", 
        device_type: "integrated",
        UserId: dbUser.id
    }).then(function(dbPhone){
    });
});
