INSERT INTO users (username, user_password, company, account_number, discount, createdAt, updatedAt) 
VALUES 
("Steven Segal", "1111111111", "Arcadis", 990179191, 22, current_timestamp, current_timestamp), 
("Shailene Woodley", "1111111501", "Encana", 990112618, 21, current_timestamp, current_timestamp);

INSERT INTO company_inventory (company, end_user, phone_number, rateplan, rateplan_gb, device_name, device_type, createdAt, updatedAt, UserId) 
VALUES 
("Encana", "Shailene Woodley", 1118675309, "Mobile Select 1Gb", 1, "iPhone 7", "Integrated", current_timestamp, current_timestamp, 2), 
("Encana", "Mark Ruffalo", 1118673459, "Mobile Select 3Gb", 3, "iPhone 6S", "Integrated", current_timestamp, current_timestamp, 2);