import React from 'react'
import BestSellers from './bestSellers'
import {shallow} from 'enzyme'

describe('Testing <BestSellers/>', () => {
    const item = shallow(<BestSellers/>)
    describe('Testing snapshot, state and props', () => {
        it('SearchItem have rendered correctly', () => {
            expect(item).toMatchSnapshot()
        });

        it('SearchItem state "bestItems" is empty', () => {
            expect(item.state().bestItems).toBe('')
        })
        it('SearchItem state "error" is falsy', () => {
            expect(item.state().error).toBeFalsy()
        })

    })
})