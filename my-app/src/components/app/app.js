import React, {Component} from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'
import './app.css'
import ModalForDelate from '../modal'
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
        {label: "Going to learn React", important: true, like: false, id: 'qwqw'},
        {label: "That is so good", important: false, like: false, id: 'wqwq'},
        {label: "I need a break", important: false, like: false, id: 'qwer'}
        ],
        term: '',
        modal: false,
        idForDelate: '',
        filter: 'all'
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
    requstForDelate = () => {
        this.deleteItem(this.state.idForDelate)
        this.setState({
            modal: !this.state.modal
        })
    }

    cancelDelate = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    modalForDelate = (id) => {
        const forState = {...this.state}
        forState.idForDelate = id
        forState.modal = !forState.modal
        this.setState(forState)
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.myIdGenerator()
        }
        this.setState(({data}) => {
            const newArray = [...data, newItem]
            return {
                data: newArray
            }
        })
    }

    myIdGenerator() {
       return Math.random() * 8
    }


     onToggle = (id, e) => {
          const ans = e.target.tagName === 'SPAN'
          this.setState(({data}) => {
              const index = data.findIndex(elem => elem.id === id)
              const old = data[index]
              const ev = ans ? {important: !old.important} : {like: !old.like}
              const newItem = {...old, ...ev}

              const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

              return {
                  data: newArray
              }
          })
     }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter( (item) => {
            return item.label.indexOf(term) > -1
        })
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state

        const liked = data.filter(item => item.like).length
        const allPosts = data.length

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter)

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}    
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList 
                    posts={visiblePosts}
                    deleteItem={this.modalForDelate}
                    onToggle={this.onToggle}
                    />
                <PostAddForm
                    onAdd={this.addItem}/>
                {this.state.modal ? <ModalForDelate modal={this.state.modal} onCancel={this.cancelDelate} onDelate={this.requstForDelate}/> : null}
            </div>
        )
    }
}
 