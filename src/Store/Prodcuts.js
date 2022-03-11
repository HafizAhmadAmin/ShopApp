import { action, computed, makeObservable, observable } from "mobx";

export class PorductStore {
  products = [];
  cartProducts = [];

  constructor() {
    makeObservable(this, {
      products: observable,
      cartProducts: observable,
      addProducts: action,
      addCart: action,
      removeCart: action,
      updateQuantity: action,
      totalPrice: computed,
    });
  }

  addProducts(items) {
    this.products = items;
  }

  addCart(item, index) {
    if (item !== null) {
      item.cartAdded = true;
      this.products[index] = item;
      const cartObject = {
        ...item,
        id: index,
        quantity: 1,
        totalPrice: item.price,
      };
      this.cartProducts.push(cartObject);
    }
  }

  removeCart(item, index) {
    if (item !== null) {
      item.cartAdded = false;
      this.products[index] = item;
      const cartIndex = this.cartProducts.indexOf(
        this.cartProducts.filter((obj) => obj.id === index)[0]
      );
      this.cartProducts.splice(cartIndex, 1);
    }
  }

  updateQuantity(index, quantity) {
    let item = this.cartProducts[index];
    item.quantity = quantity;
    item.totalPrice = item.price * item.quantity;
    this.cartProducts[index] = item;
  }

  get totalPrice() {
    let price = 0;
    this.cartProducts.forEach((item) => {
      price += item.totalPrice;
    });

    return price;
  }
}

export default new PorductStore();
