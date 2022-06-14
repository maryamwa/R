import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema(
  {
    productId: { type: String },
    amount: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', OrderSchema);
export default Order;
