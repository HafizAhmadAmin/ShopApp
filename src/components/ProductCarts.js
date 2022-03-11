import React from "react";
import ConnectStore from "./ConnectStore";

function ProductCarts(props) {
  const { checkout } = props;
  const { productStore } = props.store;

  const changeQuantity = (index, quantity, action) => {
    if (action === "-") {
      if (quantity !== 1) {
        productStore.updateQuantity(index, quantity - 1);
      }
    } else if (action === "+") {
      productStore.updateQuantity(index, quantity + 1);
    }
  };

  return (
    <div className="flex-container">
      <table className="table mt-5 p-3">
        <thead>
          <tr>
            <th>Product</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productStore.cartProducts.map((product, i) => {
            return (
              <tr key={i}>
                <td>
                  <img width={50} height={50} src={product.image} />
                  &ensp;
                  <span>{product.title}</span>
                </td>
                <td>{product.selectedSize}</td>
                <td style={{ display: "flex" }}>
                  <span
                    className="c-pointer text-color"
                    onClick={() => changeQuantity(i, product.quantity, "-")}
                  >
                    -
                  </span>
                  <span className="text-color">{product.quantity}</span>
                  <span
                    className="c-pointer text-color"
                    onClick={() => changeQuantity(i, product.quantity, "+")}
                  >
                    +
                  </span>
                </td>
                <td>${product.totalPrice}</td>
                <td>
                  <span
                    className="c-pointer"
                    onClick={() => productStore.removeCart(product, product.id)}
                  >
                    &times;
                  </span>
                </td>
              </tr>
            );
          })}
          {productStore.cartProducts.length === 0 ? (
            <>
              <tr>
                <td colSpan={5} className="text-center">
                  No data available
                </td>
              </tr>
            </>
          ) : (
            <>
              <tr>
                <td colSpan={4} className="text-right">
                  <h5>Subtotal:</h5>
                </td>
                <td>
                  <h5>{productStore.totalPrice}</h5>
                </td>
              </tr>
              <tr>
                <td colSpan={4} className="text-right">
                  <h5 style={{ marginRight: "10px" }}>Shiping:</h5>
                </td>
                <td>
                  <h5>Free</h5>
                </td>
              </tr>
              <tr>
                <td colSpan={4} className="text-right">
                  <h4 style={{ marginRight: "23px" }}>Total:</h4>
                </td>
                <td>
                  <h4>{productStore.totalPrice}</h4>
                </td>
              </tr>
              <tr>
                <td colSpan={6} className="text-right">
                  <button
                    className="btn btn-lg btn-primary"
                    style={{ marginBottom: "20px", width: "30%" }}
                    onClick={() => checkout()}
                  >
                    Checkout
                  </button>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ConnectStore(ProductCarts);
