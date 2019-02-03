import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';


export default class housePage extends Component {

    gotService = new gotService();

    state = {
        selectedItem: 4,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
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

        const itemList = (
            <ItemList 
                onItemSelected = {this.onItemSelected} 
                getData = {this.gotService.getAllHouses}
                renderItem={(item) => item.name}/>
        )

        const itemDetails = (
            <ItemDetails itemId = {this.state.selectedItem}
                         getData={this.gotService.getHouse}
                         title='Выберите, пожалуйста, дом из списка'>
                <Field field='region' label='Region' />
                <Field field='coatOfArms' label='coatOfArms' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}