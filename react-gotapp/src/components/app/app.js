import React, {Component} from 'react';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import styled from 'styled-components';

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
const Button = styled.button`
    color: #fff;
    text-decoration: none;
    user-select: none;
    background: rgba(5, 8, 48, 1);
    padding: .7em 1.5em;
    outline: none;
    :hover {
        background: rgb(232,95,76);
    }
    :active {
        background: rgb(152,15,0);
    }
`


export default class App extends Component {

    state = {
        hide: false
    }
    
    onHide = () => {
        this.setState({hide: !this.state.hide})
    }

    render() {
        const {hide} = this.state
        return (
            <> 
                <ContainerDiv>
                    <Header />
                </ContainerDiv>
                <ContainerDiv>
                    <RowDiv>
                        <ColLg5>
                            <RandomChar hide={hide}/>
                        </ColLg5>
                        <ColLg5>
                            <Button onClick={this.onHide} type="button">Скрыть</Button>
                        </ColLg5>
                    </RowDiv>
                    <RowDiv>
                        <ColMd6>
                            <ItemList />
                        </ColMd6>
                        <ColMd6>
                            <CharDetails />
                        </ColMd6>
                    </RowDiv>
                </ContainerDiv>
            </>
        );
    }
};