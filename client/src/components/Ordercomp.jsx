import "./order.css";
import "react-step-progress-bar/styles.css";

import { ProgressBar, Step } from "react-step-progress-bar";
import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

const Order = () => {
  const params = useParams();
  const [order, setOrder] = useState(null);
  const [orderStatus, setOrderStatus] = useState(10);

  const getPercent = (orderStatus) => {
    orderStatus = orderStatus.toLowerCase();
    if (orderStatus == "shipped") {
      setOrderStatus(40);
    } else if (orderStatus === "delivered") {
      setOrderStatus(70);
    } else if (orderStatus === "returned") {
      setOrderStatus(100);
    }
  };
  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/orders/${params.id}`
        );
        setOrder(res.data);
        getPercent(res.data.status);

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrder();
  }, [0]);

  return (
    <>
     
      <div className="OrderContainer">
        <div className="details">
          {order !== null ? (
            order.products.map((product, index) => {
              return (
                <>
                  <p className="product-number">Product: {index + 1}</p>
                  <div className="product id">
                    <span style={{ fontWeight: "bold" }}>Product ID: </span>
                    {product._id}
                  </div>
                  <div className="product quantity">
                    <span style={{ fontWeight: "bold" }}>
                      Product quantity:{" "}
                    </span>
                    {product.quantity}
                  </div>
                </>
              );
            })
          ) : (
            <div>Loading</div>
          )}
        </div>
        <div className="order-progress">
          <ProgressBar percent={orderStatus}>
            <Step>
              {({ accomplished }) => (
                <div
                  className={`indexedStep ${
                    accomplished ? "accomplished" : null
                  }`}
                >
                  Created
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished }) => (
                <div
                  className={`indexedStep ${
                    accomplished ? "accomplished" : null
                  }`}
                >
                  Shipped
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished }) => (
                <div
                  className={`indexedStep ${
                    accomplished ? "accomplished" : null
                  }`}
                  style={{ backgroundColor: "green" }}
                >
                  Delivered
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished }) => (
                <div
                  className={`indexedStep ${
                    accomplished ? "accomplished" : null
                  }`}
                  style={{ backgroundColor: "red  " }}
                >
                  Returned
                </div>
              )}
            </Step>
          </ProgressBar>
        </div>
      </div>
    </>
  );
};

export default Order;
