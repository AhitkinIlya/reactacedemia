import React from 'react'
import CoffeeDetails from './coffeeDetails'
import {shallow} from 'enzyme'
describe('Testing <ItemList/>', () => {
    const item = shallow(<CoffeeDetails/>)
    describe('Testing snapshot, state and props', () => {
        it('SearchItem have rendered correctly', () => {
            expect(item).toMatchSnapshot()
        });

        it('SearchItem state "item" is empty', () => {
            expect(item.state().item).toBe('')
        })
        it('SearchItem state "error" is falsy', () => {
            expect(item.state().error).toBeFalsy()
        })
    })
})