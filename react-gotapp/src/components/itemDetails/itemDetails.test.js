import React from 'react';
import ItemDetails from './itemDetails';
import gotService from '../../services/gotService';
import {mount} from 'enzyme'

describe('Testing <ItemDetails/>', () => {
    const service = new gotService()
    const itemDetails = mount(<ItemDetails
                                getData={service.getBook}
                                itemId={3}/>)
    describe('Testing snap, state and props', () => {
        it('Header have rendered correctly', () => {
            expect(itemDetails).toMatchSnapshot()
        })

        it('Testing state "item" is null', () => {
            expect(itemDetails.state().item).toBeNull()
        })
    })
    describe('Testing handlers', () => {
        it('Testing updateChar', () => {
            itemDetails.instance().updateChar()
            expect(itemDetails.state().item).not.toBeNull()
        })
    })
})