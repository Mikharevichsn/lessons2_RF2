// Исправьте ошибки чтобы код работал.

const product = {
  price: 5000,
  showPrice() {
    console.log(this.price);
  }
}


function callAction(action) {
  action();
}

callAction(product.showPrice.bind(product));