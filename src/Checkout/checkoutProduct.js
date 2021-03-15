import React from "react";
import "./checkoutproduct.css";
import { useStateValue } from "../StateProvider/StateProvider";

function CheckoutProduct({ id, image, title, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // remove the item the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div classname="checkoutproduct">
      <img className="checkoutproduct__img" src={image} alt="img" />

      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>
        <p classname="checkoutproduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
