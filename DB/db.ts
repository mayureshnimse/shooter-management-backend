


import mysql from 'mysql2/promise';

async function connectDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'super_db',
    });

    console.log('Database connected successfully');
    return connection;
  } catch (error:any) {
    console.error('Error connecting to the database:', error.message);
    throw error;
  }
}

export { connectDatabase };
