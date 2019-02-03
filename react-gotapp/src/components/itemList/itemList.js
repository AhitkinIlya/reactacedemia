import React, {Component} from 'react';
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

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }


    renderItems(arr) {
        
        return arr.map((item) => {
            const {id} = item
            const label = this.props.renderItem(item)
            return (
                <ListGroupItem
                    key = {id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {label}
                </ListGroupItem>
            )
        })
    }

    render() {

        const {itemList} = this.state

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList)

        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}