let EatException = require('./eat-exception');
class Product {

    constructor(name,kcal_per_portion) {
        this.name = name;
        this.kcal_per_portion = kcal_per_portion;
    }

    checkOnJunky(){
        if(this.kcal_per_portion > 200) {
            throw new EatException()
        }
    }

}
module.exports.Product = Product;


/*Task 03 (test.js)Task name: Try, catch*/
// const { Product } = require("./Product");
// const { Ingestion } = require("./Ingestion");
// const productNames = [
//   "Nutella",
//   "Chicken",
//   "Coca-Cola",
//   "Biscuit",
//   "Brocolli",
//   "Tomatoes",
//   "Apple",
//   "Potato",
//   "Pizza",
//   "Beer",
// ];

// const randomInt = (min, max) => {
//   return min + Math.floor((max - min) * Math.random());
// };

// const stock = new Ingestion("breakfast", 1);

// productNames.forEach((name) => {
//   stock.setProduct(new Product(name, randomInt(40, 500)));
// });

// productNames.forEach((productName) => {
//   console.log(
//     `***\nGetting ${productName} that has`,
//     `${stock.getProductInfo(productName).kcal} calories.`
//   );
//   try {
//     stock.getFromFridge(productName);
//     console.log(`You're doing great, ${productName} is good!`);
//   } catch (error) {
//     console.log(
//       `Caught exception: ${error.message}!`,
//       `Throw ${productName} away!`
//     );
//   }
// });
