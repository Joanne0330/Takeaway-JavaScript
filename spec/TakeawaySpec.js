'use strict';

describe('Takeaway', function() {
    let takeaway;

    beforeEach(function() {
        takeaway = new Takeaway;
    });
    
    it('contains a menu', function() {
        expect(takeaway.menu).toEqual({ "fried rice": 4, "pizza": 8, "chicken curry": 7})
    });
    
    // beforeEach(function() {
    //     mockMenu = jasmine.createSpyObj('mockMenu', ['takeaway.menu'])
    // })
    // it('can use a mock menu', function() {
    //     spyOn(takeaway, '{ "fried rice": 4, "pizza": 8, "chicken curry": 7}').andReturn(mockMenu);
    //     expect(function() {takeaway.menu; }).toEqual({ "fried rice": 4, "pizza": 8, "chicken curry": 7})
    // })
})