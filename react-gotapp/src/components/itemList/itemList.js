import React, {Component} from 'react';
import gotService from '../../services/gotService';
import Spinner from '../spinner'
import styled from 'styled-components';

const ListGroup = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    cursor: pointer;
`;

const ListGroupItem = styled.li`
    display: flex !important;
    justify-content: space-between !important;
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-right: 0;
    border-left: 0;
    border-radius: 0;
`;

export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharactes()
            .then((charList) => {
                this.setState({
                    charList
                })
            })
    }


    renderItems(arr) {
        
        return arr.map((item, i) => {
            const id = item.url.match(/[0-9]+/)[0]
            return (
                <ListGroupItem
                    key = {id}
                    onClick={() => this.props.onCharSelected(id)}
                >
                    {item.name + id}
                </ListGroupItem>
            )
        })
    }

    render() {

        const {charList} = this.state

        if (!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList)

        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}