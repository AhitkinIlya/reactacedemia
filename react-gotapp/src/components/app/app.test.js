import React from 'react';
import App from './app';
import {shallow} from 'enzyme'

describe('Testing <App/>', () => {
    it('Header have rendered correctly', () => {
        const app = shallow(<App/>)
        expect(app).toMatchSnapshot()
    })
})