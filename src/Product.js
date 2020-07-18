import React from "react";
import "./Product.css";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "./StateProvider";

function Product({ id, title, rating, price, image }) {
  const [{ basket }, dispatch] = useStateValue(); // dispatch is used to push action and this is handled in reducer
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹ </small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          <Rating name="size-medium" defaultValue={rating} size="medium" />
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
