import React, {Component} from 'react';
import Header from '../header';
import RandomItem from '../randomItem';
import {CharacterPage, HousePage, BookPage, BooksItem} from '../pages';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';


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
// const ColMd6 = styled.div`
//     position: relative;
//     width: 100%;
//     padding-right: 15px;
//     padding-left: 15px;
//     @media (min-width: 768px) {
//         flex: 0 0 50%;
//         max-width: 50%;
//     }
// `
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
    gotService = new gotService();

    state = {
        showRandomItem: false,
        error: false
    }

    componentDidCatch() {
        console.log('error')
        this.setState({
            error: true
        })
    }
    
    toggleRandomChar = () => {
        this.setState({showRandomItem: !this.state.showRandomItem})
    }


    render() {
        const {showRandomItem} = this.state
        const remove = showRandomItem ? null : <RandomItem/>

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Router>
                <div> 
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
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousePage}/>
                        <Route path='/books/' exact  component={BookPage}/>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params
                                return <BooksItem bookId={id}/>
                            }
                        }/>
                    </ContainerDiv>
                </div>
            </Router>
        );
    }
};
