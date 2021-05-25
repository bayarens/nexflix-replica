import React from 'react'
import { searchAPI } from '../networkRequest'
import ContentReel from './ContentReel'

class searchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            results: []
        }
    }

    changeSearch = (e) => {
        this.setState({ search: e.target.value })
    }

    triggerSearch = async (e) => {
        let result = await searchAPI(this.state.search)
        this.setState({ results: result.results })
    }

    render() {
        return (
            <>
            <div id='search'>

                <input type='text' value={this.state.search} onChange={this.changeSearch} id='inputBar'></input>

                <button onClick={this.triggerSearch} id='searchButton'><span>Search</span></button>
                
                
            </div>
            <ContentReel list={this.state.results} title='Search Results'/>
            </>
        )
    }
}
export default searchBar