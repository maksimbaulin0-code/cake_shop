const db = require('./db');

async function initDb() {
  try {
    console.log('Инициализация базы данных...');
    
    // Создание таблицы cakes_catalog
    await db.query(`
      CREATE TABLE IF NOT EXISTS cakes_catalog (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        image_url VARCHAR(255),
        price DECIMAL(10, 2),
        stock INTEGER DEFAULT 0,
        color VARCHAR(50),
        cake_type VARCHAR(50),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Таблица cakes_catalog готова.');

    // Создание таблицы cakes_orders
    await db.query(`
      CREATE TABLE IF NOT EXISTS cakes_orders (
        id SERIAL PRIMARY KEY,
        order_id VARCHAR(255) UNIQUE,
        username VARCHAR(255),
        user_id BIGINT,
        status VARCHAR(50) DEFAULT 'pending',
        amount DECIMAL(10, 2),
        details TEXT,
        cake_name VARCHAR(255),
        count INTEGER,
        order_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        address VARCHAR(255),
        street VARCHAR(255),
        house VARCHAR(50),
        apartment VARCHAR(50),
        entrance VARCHAR(50),
        intercom VARCHAR(50),
        comment TEXT,
        items JSONB
      );
    `);
    console.log('Таблица cakes_orders готова.');

    console.log('Инициализация базы данных успешно завершена!');
  } catch (error) {
    console.error('Ошибка при инициализации базы данных:', error);
  } finally {
    process.exit();
  }
}

initDb();
