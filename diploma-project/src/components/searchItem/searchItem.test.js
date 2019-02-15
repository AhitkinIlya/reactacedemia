import React from 'react'
import SearchItem from './searchItem'
import {shallow} from 'enzyme'

describe('Testing <SearchItem/>', () => {
    const item = shallow(<SearchItem/>)
    describe('Testing snapshot, state and props', () => {
        it('SearchItem have rendered correctly', () => {
            expect(item).toMatchSnapshot()
        });

        it('SearchItem state "term" is empty', () => {
            expect(item.state().term).toBe('')
        })
    })
})