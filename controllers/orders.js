import { ordersPool } from '../db/server.js';

export const getAllOrders = async (req, res) => {
  try {
    const result = await ordersPool.query('SELECT * FROM orders');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
};

export const getOrderById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await ordersPool.query('SELECT * FROM orders WHERE id = $1', [id]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
};

export const addNewOrder = async (req, res) => {
  const { price, date, user_id } = req.body;

  try {
    const result = await ordersPool.query(
      'INSERT INTO orders (price, date, user_id) VALUES ($1, $2, $3) RETURNING *',
      [name, author, image_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { price, date, user_id } = req.body;

  try {
    const result = await pool.query(
      'UPDATE orders SET first_name = $1, last_name = $2, age = $3 WHERE id = $4 RETURNING *',
      [price, date, user_id, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'something broke' });
    console.log(err);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await ordersPool.query('DELETE FROM users WHERE ID = $1', [id]);
    res.status(200).json({ message: 'user deleted' });
  } catch (err) {
    res.status(500).json({ message: 'something broke' });
    console.log(err);
  }
};