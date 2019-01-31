import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import styled from 'styled-components';

const RowDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`
const ColMd6 = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    @media (min-width: 768px) {
        flex: 0 0 50%;
        max-width: 50%;
    }
`


export default class CharacterPage extends Component {

    state = {
        selectedChar: 130,
        error: false
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <RowDiv>
                <ColMd6>
                    <ErrorMessage>
                        <ItemList onCharSelected = {this.onCharSelected} />
                    </ErrorMessage>
                </ColMd6>
                <ColMd6>
                    <ErrorMessage>
                        <CharDetails charId = {this.state.selectedChar} />
                    </ErrorMessage>
                </ColMd6>
            </RowDiv>
        )
    }
}