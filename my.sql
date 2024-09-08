CREATE TABLE produk6(
	id INT AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(255) NOT NULL,
	comment TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO produk6 (username, comment, created_at) 
VALUES ('john_doe', 'Great post!', NOW());
