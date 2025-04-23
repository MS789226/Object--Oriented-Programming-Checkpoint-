Javascript
  ProductProperties {
    constructor(name, price, quantity) {
        .name = name; 
        .price = price;
        .quantity = quantity; 
    }

   getTotalValue() {
      .price * .quantity;
    }

    toString() {
        `Product: ${.name}, Price: ${.price.toFixed(2)}, Quantity: ${.quantity}`;
    }

 applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * discount;
        });
    }
}

 PerishableProductProperties , ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity); 
        .expirationDate = expirationDate; 
    }
  
    toString() {
         `${super.toString()}, Expiration Date: ${.expirationDate}`;
    }
}

 milk =  PerishableProductProperties("Milk", 1.50, 10, "2029-12-14");
 bread =  PerishableProductProperties("Bread", 2.00, 20, "2029-01-18");

 Store {
    constructor() {
     .inventory = [];
    }

    addProduct(product) {
      .inventory.push(product);
    }

    getInventoryValue() {
        .inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }

    // Method to find a product by its name
    findProductByName(name) {
        .inventory.find(product => product.name === name) || null;
    }
}
