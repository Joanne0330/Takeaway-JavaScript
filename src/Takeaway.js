'use strict';

class Takeaway {
    constructor(dishes = new Menu) {
        this.menu = dishes.dishes;
        this.basket = {}; 
        this.summary = []
        this.sum = 0;
        this.summaryText = "";
    };

    order(dish, quantity) {
        for (var key in this.menu) {
            // if (this.menu.hasOwnProperty(dish) === true) {
            if (dish == "fried rice" || dish =="pizza" || dish == "chicken curry") {
                this.basket[dish] = quantity; 
            }
        }
        this.summary.push(` ${dish} X ${quantity}`);  
        return this.basket  
    }

    orderSummary() {
        for (var key in this.basket) {
            this.sum += (this.menu[key] * this.basket[key]);
        }
        // console.log(`Thank you! Your order:${this.summary} and the total is £${this.sum}`)
        this.summaryText = `Thank you! Your order:${this.summary} and the total is £${this.sum}`
        return this.summaryText
    } 


}