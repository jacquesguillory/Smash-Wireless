module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
			validate: {
				len: [1,30]
			} 
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
			validate: {
				len: [1,30]
			} 
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
			validate: {
				len: [1,30]
			} 
        },
        account_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discount: {
            type: DataTypes.DECIMAL(10,2),
            default: 0,
            allowNull: false
        }
    }, {
        tableName: 'users'
    });
    
    User.associate = function(models){
        User.hasMany(models.Phone,{
            onDelete: "cascade"
        });
    };

    return User;
};