'use strict';

describe('Menu', function(){
   let menu;
// 
   beforeEach(function() {
       menu = new Menu;
   });

   it('has a menu object by default', function() {
       expect(menu.dishes).toEqual({
           "fried rice": 4,
           "pizza": 8,
           "chicken curry": 7
       })
   })

   it('prints a menu for clients to read', function() {
       expect(menu.print()).toEqual("fried rice: 4.00\npizza: 8.00\nchicken curry: 7.00\n")
   })

})