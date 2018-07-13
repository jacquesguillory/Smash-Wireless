DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    user_password VARCHAR(30) NOT NULL,
    company VARCHAR(30) NOT NULL,
    account_number INT NOT NULL,
    discount INT NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE company_inventory (
	id INT NOT NULL AUTO_INCREMENT,
    company VARCHAR(30) NOT NULL,
    end_user VARCHAR(30) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    rateplan VARCHAR(30) NOT NULL,
    rateplan_gb INT NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    voice_usage INT DEFAULT 400,
    data_usage DECIMAL(10,2) DEFAULT 2.50,
    sms_usage INT DEFAULT 900,
    device_name VARCHAR(30) NOT NULL,
    device_type VARCHAR(30) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    UserId INT NOT NULL,
	PRIMARY KEY(id),
    FOREIGN KEY(UserId) REFERENCES users(id)
);