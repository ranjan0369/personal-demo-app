// init-db.js
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

// DB config (adjust for your Docker env or .env vars)
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'test'
};

async function initDB() {
  try {
    const connection = await mysql.createConnection(dbConfig);

    // 1. Create users table if not exists
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE,
        password VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Users table checked/created');

    // 2. Insert default admin if not exists
    const [adminUsers] = await connection.execute(
      'SELECT * FROM users WHERE email = ?',
      ['admin@example.com']
    );

    if (adminUsers.length === 0) {
      const hashedPassword = await bcrypt.hash('Admin@123', 10);
      await connection.execute(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        ['Admin', 'admin@example.com', hashedPassword]
      );
      console.log('✅ Admin user inserted');
    } else {
      console.log('ℹ️ Admin user already exists');
    }

    await connection.end();
  } catch (err) {
    console.error('❌ DB Init Error:', err);
    process.exit(1);
  }
}

initDB();
