import { usersPool } from '../db/server.js';

export const getAllUsers = async (req, res) => {
  try {
    const result = await usersPool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await usersPool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
};

export const addNewUser = async (req, res) => {
  const { first_name, last_name, age } = req.body;

  try {
    const result = await usersPool.query(
      'INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING *',
      [name, author, image_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, age } = req.body;

  try {
    const result = await pool.query(
      'UPDATE users SET first_name = $1, last_name = $2, age = $3 WHERE id = $4 RETURNING *',
      [first_name, last_name, age, id]
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
    await usersPool.query('DELETE FROM users WHERE ID = $1', [id]);
    res.status(200).json({ message: 'user deleted' });
  } catch (err) {
    res.status(500).json({ message: 'something broke' });
    console.log(err);
  }
};