const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    // console.table(this.items);
    for (const item of this.items) {
      if (item.name === product.name) {
        console.log("есть уже", product.name);
        item.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
      // totalPrice: 0,
    };

    this.items.push(newProduct);
  },

  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      // console.log(item);
      // console.log(item.name);

      if (productName === name) {
        console.log("нашли такой продукт", productName);
        console.log("индекс", i);

        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
    console.log("не чого не має");
  },
  countTotalPrice() {
    const { items } = this;

    let total = 0;

    for (const { price, quantity } of items) {
      // console.log(item);
      total += price * quantity;
    }
    return total;
  },
};

console.log(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 60 });
cart.add({ name: "🍌", price: 60 });
cart.add({ name: "🍌", price: 60 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });

console.table(cart.getItems());
console.log("Total:", cart.countTotalPrice(), "credits");

cart.remove("🍌");

console.table(cart.getItems());

console.log("Total:", cart.countTotalPrice(), "credits");

cart.clear();
console.table(cart.getItems());

// cart.add({ name: "🍎", price: 50 });
// cart.add({ name: "🍇", price: 60 });
// cart.add({ name: "🍌", price: 60 });
// cart.add({ name: "🍌", price: 60 });
// cart.add({ name: "🍓", price: 110 });
// cart.add({ name: "🍓", price: 110 });
// cart.add({ name: "🍓", price: 110 });
