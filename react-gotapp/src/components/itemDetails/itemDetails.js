import React, {Component} from 'react';
import gotService from '../../services/gotService';
import Spinner from '../spinner'
import styled from 'styled-components';

const ItemDetailsStyle = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 5px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;
const ListGroup = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
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
    width: 100%;
`;
const Term = styled.span`
    font-weight: bold;
`
 const ErrorSelect = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
 `
 const Title = styled.h3`
    color: #a3c7cf;
    text-align: center;
    margin-bottom: 15px;
 `


const Field = ({item, field, label}) => {
    return(
        <ListGroupItem>
            <Term>{label}</Term>
            <span>{item[field]}</span>
        </ListGroupItem>
    )
}
export {Field}

export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        item: null
    }

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateChar()
        }
    }

    updateChar(){
        const {getData} = this.props
        const {itemId} = this.props
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({item})
            })
    }

    render() {

         if (!this.state.item) {
             return <ErrorSelect>Please select a character</ErrorSelect>
        }

        if (!this.state.item) {
            return <Spinner/>
        }

        const {item} = this.state
        const {name} = item

        return (
            <>
            <Title>{this.props.title}</Title>
            <ItemDetailsStyle>
                <h4>{name}</h4>
                <ListGroup>
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ListGroup>
            </ItemDetailsStyle>
            </>
        );
    }
}