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
        console.log(result, "<--- here")
        this.setState({ results: result.results})
    }

    render() {
        return (
            <div id='search'>

                <input type='text' value={this.state.search} onChange={this.changeSearch}></input>

                <button onClick={this.triggerSearch}>Search</button>

                <ContentReel list={this.state.results} title="search results"/>
            </div>
        )
    }
}
export default searchBar