'use strict';

class Takeaway {
    constructor(dishes = new Menu) {
        this.menu = dishes.dishes;
        this.basket = {}; 
        this.summary = [];
        this.sum = 0;
        this.summaryText = "";
    };

    order(dish, quantity) {
        for (const key in this.menu) {
            if (dish == "fried rice" || dish =="pizza" || dish == "chicken curry") {
                this.basket[dish] = quantity; 
            }
        }
        this.summary.push(` ${dish} X ${quantity}`);  
        return this.basket;  
    }

    orderSummary() {
        for (const key in this.basket) {
            this.sum += (this.menu[key] * this.basket[key]);
        }
        this.summaryText = `Thank you! Your order:${this.summary} and the total is £${this.sum}`;
        return this.summaryText;
    } 
}