'use strict';

describe('Menu', function(){
   let menu;
   let dishes;
   
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

})