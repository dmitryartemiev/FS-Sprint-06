'use strict';

const exception = require('./Eat-Exception.js')

class Ingestion {
    constructor(id, meal_type, day_of_diet, products){
        this.id = id;
        this.meal_type = ['breakfast', 'lunch', 'dinner']
        this.day_of_diet = day_of_diet;
        this.products = products;
    }
    setProduct(name, amount){
        return [name, amount];
    }
    getFromFridge(product){
        return product
    }
}

module.exports.Ingestion = Ingestion;