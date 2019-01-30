import React, {Component} from 'react';
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

    render() {

        return (
            <RandomBlock>
                <h4>Random Character: John</h4>
                <ListGroup>
                    <ListGroupItem>
                        <Term>Gender </Term>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Born </Term>
                        <span>11.03.1039</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Died </Term>
                        <span>13.09.1089</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Culture </Term>
                        <span>Anarchy</span>
                    </ListGroupItem>
                </ListGroup>
            </RandomBlock>
        );
    }
}
