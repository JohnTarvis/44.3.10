import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export function getTotal(cart, products) {
  let total = 0;
  for (let product in products) {
    const price = products[product].price;
    const quantity = cart[product] ? cart[product] : 0;
    total += price * quantity;
  }
  return total;
}

export function getTotalItems(cart) {
  let total = 0;
  for (let id in cart) {
    total += cart[id];
  }
  return total;
}

function Navbar() {
  const totalItems = useSelector((store) => getTotalItems(store.cartItems));
  const totalPrice = useSelector((store) => store.totalPrice);
  return (
    <nav>
      <Link to="/">home</Link>
      <div> 
        <div>{totalItems} -- ${totalPrice}</div>     
        <div>
          <Link to="/cart">
            cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
