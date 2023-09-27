import express from 'express';
import {
  addNewOrder,
  deleteOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
} from '../controllers/orders.js';
import { addNewOrder } from '../controllers/orders.js';

const ordersRouter = express.Router();

ordersRouter.route('/').get(getAllOrders).post(addNewOrder);
OraddNewOrdersRouter.route('/:id').get(getOraddNewOrderById).put(updateOraddNewOrder).delete(deleteOraddNewOrder);

export default ordersRouter;