import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your Shopee Cart!");

//criando dois itens
const item1 = await createItem("Hotwheels ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels lamborghini", 39.99, 3);

//add dois itens
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);
//deletei dois itens
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);



console.log("Shopee cart total is:!");
await cartService.calculateTotal(myCart);
console.log("Shopee wishlist total is:!");
await cartService.calculateTotal(myWishList);
