import React from 'react';
import CharacterPage from './characterPage';
import {shallow} from 'enzyme'

describe('Testing <CharacterPage/>', () => {
    const characterPage = shallow(<CharacterPage/>)
    describe('Testing state, props and snap', () => {
        it('Header have rendered correctly', () => {
            expect(characterPage).toMatchSnapshot()
        })

        it('testing state "error" is false', () => {
            expect(characterPage.state().error).toBeFalsy()
        })

        it('testing state "selectedItem" is number', () => {
            expect(characterPage.state().selectedItem).toBe(130)
        })
    })
    describe('Testing handlers', () => {
        it('Testing componentDidCauth', () => {
            characterPage.instance().componentDidCatch()
            expect(characterPage.state().error).toBeTruthy()
        })

        it('Testing onItemSelected', () => {
            characterPage.instance().onItemSelected(3)
            expect(characterPage.state().selectedItem).toBeNumber()
        })
    })
})