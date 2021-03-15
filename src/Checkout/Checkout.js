import React from "react";
import "./Checkout.css";
import "../Checkout/checkoutProduct";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./checkoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/GW/GW_Desktop_Dotbulb_1500X600._CB658001698_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
