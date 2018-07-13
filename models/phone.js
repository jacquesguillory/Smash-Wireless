module.exports = function(sequelize, DataTypes){
    var Phone = sequelize.define("Phone", {
        company: {
            type: DataTypes.STRING,
            allowNull: false,
			validate: {
				len: [1,30]
			} 
        },
        end_user: {
            type: DataTypes.STRING,
            allowNull: false,
			validate: {
				len: [1,30]
			} 
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
			validate: {
				len: [1,20]
			}
        },
        rateplan: {
            type: DataTypes.STRING,
            allowNull: false,
			validate: {
				len: [1,30]
			}
        },
        rateplan_gb: {
            type: DataTypes.INTEGER,
            allowNull: false,
			validate: {
				len: [1,30]
			}
        },
        active: {
            type: DataTypes.BOOLEAN,
            default: true,
            allowNull: false
        },
        voice_usage: {
            type: DataTypes.INTEGER,
            default: 0,
            allowNull: false
        },
        data_usage: {
            type: DataTypes.DECIMAL(10,2),
            default: 0,
            allowNull: false
        },
       sms_usage: {
            type: DataTypes.INTEGER,
            default: 0,
            allowNull: false
        },
        device_name: {
            type: DataTypes.STRING,
            default: "iPhone 7S-32Gb",
			validate: {
                len: [1,30]
            }
        },
        device_type: {
            type: DataTypes.STRING,
            default: "Phone",
            validate: {
                len: [1,30]
            }
        } 
        
    }, {
        tableName: 'company_inventory'
    });

    Phone.associate = function(models){
        Phone.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Phone;
};