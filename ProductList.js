import React from "react";
import {Link} from "react-router-dom";
import {useSelector, shallowEqual} from "react-redux";
import CartIcons from "./CartIcons";

function ProductList() {
  const products = useSelector((store) => store.products, shallowEqual);
  const productCards = Object.keys(products).map(id => (
    <div key={id}>
      <div>
        <div>
          <div>
            <Link to={`/products/${id}`}>{products[id].name}</Link>
          </div>
          <CartIcons id={id} />
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div>Look at all of our beautiful products!</div>
      <div>{productCards}</div>
    </div>
  );
}

export default ProductList;
