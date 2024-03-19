import React, { Component } from 'react'
import { Segment, Input } from 'semantic-ui-react'

class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar'>
                <Segment stacked>
                    <Input icon='search' size='large' placeholder='Search...'></Input>
                </Segment>
            </div>
        )
    }

}

export default SearchBar