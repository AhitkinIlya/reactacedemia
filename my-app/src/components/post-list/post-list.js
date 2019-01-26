import React from 'react'
import './post-list.css'
import PostListItem from '../post-list-item'
import { ListGroup } from 'reactstrap'

const PostList = ({posts, onDelate}) => {

    const elementsFilter = posts.filter((item) => {
        return item instanceof Object && !(item instanceof Array)
            
    })
    const elements = elementsFilter.map((item) => {
        const {id, ...itemProps} = item
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelate={() => onDelate(id)}/>
            </li>
        )
    })
        
        

    

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList