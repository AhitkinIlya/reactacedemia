import React, {Component} from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'
import './app.css'
import idGenerator from 'react-id-generator'
//import  styled from 'styled-components'

// const AppBlock = styled.div`
//     margin: 0 auto;
//     max-width: 800px;
// `
// const StyledAppBlock = styled(AppBlock)`
//     background-color: grey;
// `

export default class App extends Component {
    state = {
        data: [
        [],
        {label: "Going to learn React", important: true, id: 'qwqw'},
        {label: "That is so good", important: false, id: 'wqwq'},
        {label: "I need a break", important: false, id: 'qwer'}
        ]
    }

    deleteItem = (id) => { 
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            
            const before = data.slice(0, index)
            const after = data.slice(index + 1)

            const newArr = [...before, ...after]

            return {
                data: newArr
            }
        })
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: idGenerator()
        }
        this.setState(({data}) => {
            const newArray = [...data, newItem]
            return {
                data: newArray
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelate={this.deleteItem}/>
                <PostAddForm
                    onAdd={this.addItem}/> 
            </div>
        )
    }
}
 