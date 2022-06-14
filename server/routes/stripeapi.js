import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

const stripe = Stripe(process.env.STRIPE);

const router = express.Router();

router.post("/", async(req,res) => {

  stripe.charges.create({
    source: req.body.tokenId,
    amount: req.body.amount,
    currency: 'EGP',      
},
  (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).json(stripeErr);
    } else {
      res.status(200).json(stripeRes);
    }
  },
 
);

});


export default router;