import React, {Component} from 'react';
import gotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails';
import styled from 'styled-components';

const BooksItemStyle = styled.div`
    div {
        background-color: #cecece;
    }
    li {
        background-color: #cecece;
    }
    h4 {
        color: #363f85;
    }
    span:nth-child(2) {
        color: #7645a1
    }
`


export default class BooksItem extends Component {
    gotService = new gotService();

    render() {
        return  (
            <BooksItemStyle>
            <ItemDetails itemId = {this.props.bookId}
                         getData={this.gotService.getBook}
                         >
                <Field field='numberOfPages' label='Pages' />
                <Field field='publisher' label='Publisher' />
                <Field field='released' label='Released' />
            </ItemDetails>
            </BooksItemStyle>
        )
    }
}