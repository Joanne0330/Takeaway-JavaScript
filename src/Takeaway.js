'use strict';

class Takeaway {
    constructor(dishes = new Menu) {
        this.menu = dishes.dishes;
        this.basket = [];

        // console.log(this.menu)
    
    };

    // menu() {
    //     return this.menu
    //     console.log(this.menu());
    // }
    order(dish, quantity) {
        if (dish != "fried rice" && dish!="pizza" && dish !="chicken curry") {
            alert("Dish does not exist!");
        } else {   
            this.basket.push(`${dish} X ${quantity}`)
        }
            return this.basket
    }

}