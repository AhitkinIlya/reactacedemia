import React from 'react'
import ItemList from './itemList'
import {shallow} from 'enzyme'
describe('Testing <ItemList/>', () => {
    const item = shallow(<ItemList/>)
    describe('Testing snapshot, state and props', () => {
        it('SearchItem have rendered correctly', () => {
            expect(item).toMatchSnapshot()
        });

        it('SearchItem state "listItems" is empty', () => {
            expect(item.state().listItems).toBe('')
        })
        it('SearchItem state "error" is falsy', () => {
            expect(item.state().error).toBeFalsy()
        })
    })
})