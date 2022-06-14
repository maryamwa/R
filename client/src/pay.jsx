import axios from "axios";

import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from "react";

const KEY = "pk_test_51KzQlaDN9PaTKfr9eAnIpBImenwP6ZsLDojOj0kLYLRslm7duodVmYndwSKk2oSeytgzpD68ZbQmmgrw7bN6Ks8f00dD1tOerl"
const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const [email, setEmail] = useState();

    const onToken = (token) => {
        setStripeToken(token);
    };
    useEffect(() => {
        const MakeRequest = async () => {
            try {
                const { data: paymentResponse } = await axios.post(
                    "http://localhost:5000/payments", {
                    tokenId: stripeToken.id,
                    amount: 2000,
                });
                console.log('paymentResponse', paymentResponse)

                if (paymentResponse && paymentResponse.id) {
                    const [orders, notification] = await Promise.all([
                        axios.post(
                            "http://localhost:5000/api/orders", {
                            productId: paymentResponse.id,
                            amount: 2000
                        }),
                        axios.post(
                            `http://localhost:5000/notifications/${email}`,
                        )
                    ])
                    console.log({
                        orders,
                        notification
                    })
                }
            } catch (err) {
                console.log(err)
            }
        };
        stripeToken && MakeRequest()

    }, [stripeToken])

    return (


        <div>
            <StripeCheckout name="Rabbit Mart" image="client/src/logo.png"
                token={onToken}
                stripeKey={KEY}
                SuccessUrl="http://localhost:3000/cart"

            >
                <button>
                    Pay now
                </button><br></br>
                <br></br>
                <br></br>
            </StripeCheckout>


            <input id="gamed" type="email" name="email" placeholder="m@gmail.com" className="form-control" onChange={(e) => setEmail(e.target.value)} /><br>
            </br>
        </div>
    );
};
export default Pay;