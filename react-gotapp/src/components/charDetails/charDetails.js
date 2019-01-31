import React, {Component} from 'react';
import gotService from '../../services/gotService';
import Spinner from '../spinner'
import styled from 'styled-components';

const CharDetailsStyle = styled.div`
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
`;
const Term = styled.span`
    font-weight: bold;
`
// const ErrorSelect = styled.span`
//     color: #fff;
//     text-align: center;
//     font-size: 26px;
// `

export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar()
        }
    }

    updateChar() {
        const {charId} = this.props
        if (!charId) {
            return;
        }
        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char})
            })
    }

    render() {

        // if (!this.state.char) {
        //     return <ErrorSelect>Please select a character</ErrorSelect>
        // }

        if (!this.state.char) {
            return <Spinner/>
        }

        const {char} = this.state
        const {name, gender, born, died, culture} = char


        return (
            <CharDetailsStyle>
                <h4>{name}</h4>
                <ListGroup>
                    <ListGroupItem>
                        <Term>Gender</Term>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Born</Term>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Died</Term>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Culture</Term>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
            </CharDetailsStyle>
        );
    }
}