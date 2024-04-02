import React, { Component } from 'react'
import { Segment, Input } from 'semantic-ui-react'

class SearchBar extends Component {

    pesquisaTermo = e => {
        //codigo da tecla enter é 13
        if (e.keyCode === 13) {
            const termo = e.target.value
            console.log(termo)
        }
    }

    render() {
        return (
            <div className='search-bar'>
                <Segment stacked>
                    <Input icon='search' onKeyDown={(e) => this.pesquisaTermo(e)} size='large' placeholder='Search...'></Input>
                </Segment>
            </div>
        )
    }

}

export default SearchBar