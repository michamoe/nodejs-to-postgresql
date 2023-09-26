import pg from 'pg';

const { Pool } = pg;

const usersPool = new Pool({
  id: process.env.DB_ID,
  first_name: process.env.DB_FIRST_NAME,
  last_name: process.env.DB_LAST_NAME,
  age: process.env.DB_AGE,
});

usersPool.connect((err) => {
  if (err) {
    console.error('connection error');
  } else {
    console.log('connected to ElephantSQL');
  }
});

const ordersPool = new Pool({
  id: process.env.DB_ID,
  price: process.env.DB_PRICE,
  date: process.env.DB_DATE,
  user_id: process.env.DB_USER_ID,
});

ordersPool.connect((err) => {
    if (err) {
        console.error('connection error');
      } else {
        console.log('connected to ElephantSQL');
      }
});

export { usersPool, ordersPool };
