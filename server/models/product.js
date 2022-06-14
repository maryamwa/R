import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema(
  {id:{
    type:String,
    required:true
  },
    name: {
      type: String,
      required: true,
    },
    descreption: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
    image:{
      type:String,
      required: true,
    },
    weight:{

      type:Number,
      required:true
    },
    measurement:{
      type:String,
      required:true
    },
    category:{
      type:String,
      required:true
    },
    stock:{
      type:Number,
      required:true
    }
  },
  { timestamps: true }
);
const Product = mongoose.model('Product', ProductSchema);
export default Product;
