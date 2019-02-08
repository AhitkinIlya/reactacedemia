import React from 'react';
import HousePage from './housePage';
import {shallow} from 'enzyme'

describe('Testing <HousePage/>', () => {
    const housePage = shallow(<HousePage/>)
    describe('Testing state, props and snap', () => {
        it('Header have rendered correctly', () => {
            expect(housePage).toMatchSnapshot()
        })

        it('testing state "error" is false', () => {
            expect(housePage.state().error).toBeFalsy()
        })

        it('testing state "selectedItem" is number', () => {
            expect(housePage.state().selectedItem).toBe(4)
        })
    })
    describe('Testing handlers', () => {
        it('Testing componentDidCauth', () => {
            housePage.instance().componentDidCatch()
            expect(housePage.state().error).toBeTruthy()
        })

        it('Testing onItemSelected', () => {
            housePage.instance().onItemSelected(3)
            expect(housePage.state().selectedItem).toBeNumber()
        })
    })
})