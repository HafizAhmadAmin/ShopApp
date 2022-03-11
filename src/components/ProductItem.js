import React, { useEffect, useState } from "react";
import ConnectStore from "./ConnectStore";

function ProductItem(props) {
  const [currentProduct, setCurrentProduct] = useState({});
  const { product, id } = props;
  const { productStore } = props.store;

  useEffect(() => {
    setCurrentProduct({ ...product, selectedSize: "Large" });
  }, []);

  return (
    <div className="my-3">
      <div className="card" style={{ maxHeight: "519px" }}>
        <img
          width="200"
          height="300"
          src={product.image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body text-center">
          <h4 className="card-title">{product.title} </h4>
          <div className="card-text my-3">
            <h4>${product.price}</h4>
            <label htmlFor="item-size">Size</label>
            <br />
            <select
              id="item-size"
              className="form-control"
              onChange={(e) =>
                setCurrentProduct({
                  ...currentProduct,
                  selectedSize: e.target.value,
                })
              }
            >
              {product.size.map((size, i) => {
                return (
                  <option className="text-center" value={size} key={i}>
                    {size}
                  </option>
                );
              })}
            </select>
          </div>
          {product.cartAdded ? (
            <button
              className="btn btn-sm btn-primary"
              onClick={() => productStore.removeCart(currentProduct, id)}
            >
              Undo
            </button>
          ) : (
            <button
              className="btn btn-sm btn-danger"
              onClick={() => productStore.addCart(currentProduct, id)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConnectStore(ProductItem);
