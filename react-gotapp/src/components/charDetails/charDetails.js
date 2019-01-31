import React, {Component} from 'react';
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

export default class CharDetails extends Component {

    render() {
        return (
            <CharDetailsStyle>
                <h4>John Snow</h4>
                <ListGroup>
                    <ListGroupItem>
                        <Term>Gender</Term>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Born</Term>
                        <span>1783</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Died</Term>
                        <span>1820</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Culture</Term>
                        <span>First</span>
                    </ListGroupItem>
                </ListGroup>
            </CharDetailsStyle>
        );
    }
}