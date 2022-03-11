const ProductList = {
  getProducts() {
    let products = [
      {
        title: "Shirt #1",
        image: require("./assets/product/1.jpg"),
        size: ["Large", "Medium", "Small"],
        cartAdded: false,
        selectedSize: "Large",
        price: 970
      },
      {
        title: "Shirt #2",
        image: require("./assets/product/2.jpg"),
        size: ["Large", "Medium", "Small"],
        cartAdded: false,
        selectedSize: "Large",
        price: 280
      },
      {
        title: "Shirt #3",
        image: require("./assets/product/3.jpg"),
        size: ["Large", "Medium", "Small"],
        cartAdded: false,
        selectedSize: "Large",
        price: 630
      },
      {
        title: "Shirt #4",
        image: require("./assets/product/4.png"),
        size: ["Large", "Medium", "Small"],
        cartAdded: false,
        selectedSize: "Large",
        price: 330
      },
      {
        title: "Shirt #5",
        image: require("./assets/product/5.jpg"),
        size: ["Large", "Medium", "Small"],
        cartAdded: false,
        selectedSize: "Large",
        price: 440
      },
      {
        title: "Shirt #6",
        image: require("./assets/product/6.jpg"),
        size: ["Large", "Medium", "Small"],
        cartAdded: false,
        selectedSize: "Large",
        price: 866
      },
      {
        title: "Shirt #7",
        image: require("./assets/product/7.jpg"),
        size: ["Large", "Medium", "Small"],
        cartAdded: false,
        selectedSize: "Large",
        price: 340
      },
      {
        title: "Shirt #8",
        image: require("./assets/product/8.jpg"),
        size: ["Large", "Medium", "Small"],
        cartAdded: false,
        selectedSize: "Large",
        price: 530
      },
    ];

    return products;
  },
};

export default ProductList;
