import React, {Component} from 'react';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage'
import styled from 'styled-components';
import ErrorMessage from '../errorMessage'

const ContainerDiv = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 576px) {
        max-width: 540px;
    };
    @media (min-width: 768px) {
        max-width: 720px;
    };
    @media (min-width: 992px) {
        max-width: 960px;
    };
    @media (min-width: 1200px) {
        max-width: 1140px;
    };
`
const RowDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`
const ColLg5 = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    @media (min-width: 992px) {
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    };
    @media (min-width: 992px) {
        margin-left: 0;
    };
`
const Button = styled.button`
    color: #fff;
    text-decoration: none;
    user-select: none;
    background: rgba(5, 8, 48, 1);
    padding: .7em 1.5em;
    outline: none;
    margin-bottom: 10px;
    :hover {
        background: rgb(232,95,76);
    }
    :active {
        background: rgb(152,15,0);
    }
`


export default class App extends Component {

    state = {
        showRandomChar: false,
        error: false
    }

    componentDidCatch() {
        console.log('error')
        this.setState({
            error: true
        })
    }
    
    toggleRandomChar = () => {
        this.setState({showRandomChar: !this.state.showRandomChar})
    }


    render() {
        const {showRandomChar} = this.state
        const remove = showRandomChar ? null : <RandomChar/>

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <> 
                <ContainerDiv>
                    <Header />
                </ContainerDiv>
                <ContainerDiv>
                    <RowDiv>
                        <ColLg5>
                            {remove}
                        </ColLg5>
                        <ColLg5>
                            <Button onClick={this.toggleRandomChar} type="button">Скрыть</Button>
                        </ColLg5>
                    </RowDiv>
                    <CharacterPage/>
                </ContainerDiv>
            </>
        );
    }
};
