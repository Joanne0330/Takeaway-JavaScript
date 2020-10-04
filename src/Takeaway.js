'use strict';

class Takeaway {
    constructor(dishes = new Menu) {
        this.menu = dishes.dishes;
        console.log(this.menu)
    };


}