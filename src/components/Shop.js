import React, { useEffect, useState } from "react";
import ProductList from "../ProductList";
import ProductItem from "./ProductItem";
import cartIcon from "../assets/cart.svg";
import ProductCarts from "./ProductCarts";
import Checkout from "./Checkout";
import ConnectStore from "./ConnectStore";

function Shop(props) {
  const { productStore } = props.store;
  const [shopMode, setShopMode] = useState(true);
  const [checkoutMode, setCheckoutMode] = useState(false);

  useEffect(() => {
    let products = ProductList.getProducts();
    productStore.addProducts(products);
  }, []);

  const checkOut = () => {
    productStore.addProducts(ProductList.getProducts());
    setCheckoutMode(true);
    productStore.cartProducts = [];
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">
            Shop App
          </a>
          <div className="cart-icon" onClick={() => setShopMode(!shopMode)}>
            <img src={cartIcon} />
            <span>{productStore.cartProducts.length}</span>
          </div>
        </div>
      </nav>
      {shopMode ? (
        <div className="container">
          <div className="row">
            {productStore.products.map((product, i) => {
              return (
                <div className="col-md-3" key={i}>
                  <ProductItem id={i} product={product} />
                </div>
              );
            })}
          </div>
        </div>
      ) : checkoutMode ? (
        <Checkout
          checkoutMode={() => {
            setCheckoutMode(false);
            setShopMode(true);
          }}
        />
      ) : (
        <ProductCarts checkout={checkOut} />
      )}
    </>
  );
}
export default ConnectStore(Shop);
