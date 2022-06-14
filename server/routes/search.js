import express from 'express';
import Product from '../models/product.js';

const router = express.Router();

router.get('/:name', async (req, res) => {
  var regex = new RegExp(req.params.name, 'i');
  Product.find({ name: regex }).then((result) => {
    res.status(200).json(result);
  });
});

export default router;
