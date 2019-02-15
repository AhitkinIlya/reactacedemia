import React from 'react'
import Filter from './filter'
import {shallow} from 'enzyme'

describe('Testing <Filter/>', () => {
    const item = shallow(<Filter filter='Brazilia'/>)
    describe('Testing snapshot, state and props', () => {
        it('Filter have rendered correctly', () => {
            expect(item).toMatchSnapshot()
        });
    })
})