'use strict';

class Takeaway {
    constructor(dishes = new Menu) {
        this.menu = dishes.dishes;
        this.basket = {}; 
        this.summary = []
        this.sum = 0;
    };

    order(dish, quantity) {
        for (var key in this.menu) {
            // if (this.menu.hasOwnProperty(dish) === true) {
            if (dish == "fried rice" || dish =="pizza" || dish == "chicken curry") {
                this.summary.push(`${dish} X ${quantity}`);  
                this.basket[dish] = quantity; 
            };
        }
        return this.basket  
    }

    // total(arguments) {
    //     console.log(arguments[0])
    // } 


}