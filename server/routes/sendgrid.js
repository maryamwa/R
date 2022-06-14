import express from 'express';
import dotenv from 'dotenv';
import sgmail from '@sendgrid/mail';

dotenv.config({ path: './config.env' });

const router = express.Router();
sgmail.setApiKey(process.env.SENDGRID);

const sendmail = async (msg) => {
  try {
    await sgmail.send(msg);   
 
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
}
router.post('/:email', async (req, res) => {

    try {
    sendmail( {
        to:req.params.email,
        from:"mohamed.gad@student.giu-uni.de",
      subject:"Your Order is Shipped!",
      text:"Your order is shipped"});   
      res.status(200).json("Message sent successfully");
    } catch (error) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    });
  
export default router;