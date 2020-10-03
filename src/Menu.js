'use strict';

class Menu {
    constructor() {

        this.dishes = {
            "fried rice": 4,
            "pizza": 8,
            "chicken curry": 7
        }
    };

    print (){
        let menuArray = [];
        Object.entries(this.dishes).forEach(entry => {
            const [key, value] = entry;
            menuArray.push(`${key}` + ": " + `${value.toFixed(2)}` + "\n");
            
        });
        return menuArray.join('');
    };

}