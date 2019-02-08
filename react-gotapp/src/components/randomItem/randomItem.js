import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage'

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

const RandomBlock = styled.div`
    border-radius: 0.25rem !important;
    background-color: #fff;
    padding: 25px 25px 25px 25px;
    margin-bottom: 40px;
    h4 {
        text-align: center;
    }   
`
const Term = styled.span`
    font-weight: bold;
`

export default class RandomChar extends Component {

    gotService = new gotService();
    
    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar()
        this.timerId = setInterval(this.updateChar, 1500)
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * 140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        console.log('render')
        const { char, loading, error } = this.state

        const errorMessage = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? <View char={char} /> : null
        return (
            <RandomBlock>
                {errorMessage}
                {spinner}
                {content}
            </RandomBlock>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char
    return (
        <>
            <h4>Random Character: {name}</h4>
                <ListGroup>
                    <ListGroupItem>
                        <Term>Gender </Term>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Born </Term>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Died </Term>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Culture </Term>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
        </>
    )
}
