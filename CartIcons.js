import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";
import "./CartIcons.css";

function CartIcons({ id }) {
  const dispatch = useDispatch();

  function add(evt) { dispatch(addToCart(id)); }
  function remove(evt) { dispatch(removeFromCart(id)); }

  return (
    <div>
      <i
        onClick={add}
      />
      <i
        onClick={remove}
      />
    </div>
  );
}

export default CartIcons;
