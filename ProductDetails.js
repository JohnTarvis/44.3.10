import React from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector, shallowEqual} from "react-redux";
import CartIcons from "./CartIcons";

function ProductDetails() {
  const {id} = useParams();
  const {image_url, name, price, description} = useSelector((store) => ({...store.products[id]}),shallowEqual);

  return (
    <div>
      <div>
        <img
          src={image_url}
          alt={name}
        />
        <div>
          <div>
            <div>{name}</div>
            <div>${price}</div>
          </div>
          <div>{description}</div>
          <CartIcons id={id} />
        </div>
        <Link to="/">
          Go back
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
