import React from 'react';
import {BookPage} from './bookPage';
import {shallow} from 'enzyme'

describe('Testing <BookPage/>', () => {
    const bookPage = shallow(<BookPage />)
    describe('Testing snap, state and props', () => {
        it('Header have rendered correctly', () => {
            expect(bookPage).toMatchSnapshot()
        })

        it('BookPage state "error" is false', () => {
            expect(bookPage.state().error).toBeFalsy()
        })
    })
    describe('Testing state after handlers', () => {
        it('testing componentDidCatch', () => {
            bookPage.instance().componentDidCatch()
            expect(bookPage.state().error).toBeTruthy()
        })
    })
})