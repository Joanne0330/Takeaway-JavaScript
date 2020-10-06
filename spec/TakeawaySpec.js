'use strict';

describe('Takeaway', function() {
    let takeaway;
    let mockMenu;

    beforeEach(function() {
        takeaway = new Takeaway;
        mockMenu = jasmine.createSpyObj('takeaway',['menu'])
    });
    
    it('contains a menu', function() {
        expect(takeaway.menu).toEqual({ "fried rice": 4, "pizza": 8, "chicken curry": 7})
    });

    it('can place an order of a dish and its quantity', function() {
        takeaway.order("pizza", 1);
        expect(takeaway.basket).toEqual({"pizza": 1})
    })
    
    it('can order many dishes', function() {
        takeaway.order("pizza", 1);
        takeaway.order("fried rice", 2)
        expect(takeaway.basket).toEqual({"pizza": 1, "fried rice": 2})
    })
    
    it('cannot take an order outside of the menu', function() {
        takeaway.order("steak", 1);
        expect(takeaway.basket).toEqual({});
    })

   xit('can use a mock menu', function() {
        // console.log(mockMenu)
        spyOn(takeaway, 'menu').andReturn({ "fried rice": 4, "pizza": 8, "chicken curry": 7});
        expect(function() {takeaway.menu; }).toEqual(mockMenu)
    })
})