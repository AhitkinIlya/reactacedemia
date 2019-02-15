import React, {Component} from 'react'
import About from '../../about/about'
import Header from '../../header/header'
import ItemList from '../../itemList/itemList'
import getDB from '../../../services/getDB'
import './coffePage.css'
import SearchItem from '../../searchItem/searchItem';
import Filter from '../../filter/filter';

class CoffeePage extends Component {
    data = new getDB()

    state = {
        term: '',
        filter: ''
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter( (item) => {
            return item.name.indexOf(term[0].toUpperCase() + term.substring(1)) > -1
        })
    }

    filterPost(items, filter) {
        if (filter === 'brazil') {
            return items.filter(item => item.country === 'Brazil')
        } else if (filter === 'kenya') {
            return items.filter(item => item.country === 'Kenya')
        } else if (filter === 'columbia') {
            return items.filter(item => item.country === 'Columbia')
        }
         else {
            return items
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onFilterSelect = (filter) => {
        if (filter === this.state.filter) {
            this.setState({filter: ''})
        } else {
            this.setState({filter})
        }
    }

    visibleItem = (data) => {
        return this.filterPost(this.searchPost(data, this.state.term), this.state.filter)
    }

    render() {
    const {filter} = this.state
    const text = <p className="aboutTextCoffee">Extremity sweetness difficult behavior he of. On disposal of as landlord horrible.<br/><br/> Afraid at highly months do things on at. Situation<br/> recommend objection do intention<br/> so questions.<br/> As greatly removed calling pleased improve an. Last ask him cold feel<br/> met spot shy want. Children me laughing we prospect answered followed. At it went<br/> is song that held help face.</p>    
        return (
            <>
                <Header classStyle="ourCoffee"
                        title={`Our Coffee`}
                        pageCoffe={true}/>
                <About about={false}
                       src="/img/ourCoffee.png"
                        title={`About our beans`}
                       text={text}/>
                <div className="filterItem">
                    <SearchItem onUpdateSearch={this.onUpdateSearch}/>
                    <Filter filter={filter}
                            onFilterSelect={this.onFilterSelect}/>
                </div>
                <ItemList getData={() => this.data.getCoffee()}
                          visibleItem={(data) => this.visibleItem(data)}
                          coffePage={true}/>
            </>
        )
    }
}

export default CoffeePage
