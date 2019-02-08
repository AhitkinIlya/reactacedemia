import React from 'react';
import RandomItem from './randomItem';
import {shallow} from 'enzyme'

describe('Testing <RandomItem/>', () => {
    const char = shallow(<RandomItem/>)

    describe('Testing snap & state', () => {
        it('RandomItem have rendered correctly', () => {
            expect(char).toMatchSnapshot()
        })
    
        it('RandomItem state "char" is empty object', () => {
            expect(char.state().char).toBeObject()
        })

        it('RandomItem state "loading" is true', () => {
            expect(char.state().loading).toBeTruthy()
        })

        it('RandomItem state "error" is true', () => {
            expect(char.state().error).toBeFalsy()
        })
    })
    describe('Handlers tests', () => {
        it('testing onCharLoading', () => {
            char.instance().onCharLoaded()
            expect(char.state().loading).toBeFalsy()
        })

        it('testing onError', () => {
            char.instance().onError()
            expect(char.state().loading).toBeFalsy()
            expect(char.state().error).toBeTruthy()
        })

        it('testing updateChar', () => {
            char.instance().updateChar()
            expect(char.state().loading).toBeFalsy()
        })
    })

})