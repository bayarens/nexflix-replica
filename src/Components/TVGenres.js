import React from 'react'
import { tvGenres, tvDiscover } from '../networkRequest'
import ContentReel from './ContentReel'

class TVGenre extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            genreMenu: [],
            displayedCat: [],
            selectedCat: ""
        }
    }


    componentDidMount() {
        tvGenres()
            .then(res => this.setState({ genreMenu: res.genres }))
    }

    dropDownMenu = (e) => {
        this.setState({ selectedCat: e.target.value})
        tvDiscover(e.target.value)
            .then(res => this.setState({ displayedCat: res.results }))
    }

    convertIDtoString = (id) => {
        return this.state.genreMenu.find(genre => genre.id == id).name
    }


    render() {
        return (
            <div>
                {this.state.genreMenu?.length > 0 && <select onChange={this.dropDownMenu} value={this.state.selectedCat}>
                    <option disabled value="">Categories</option>
                    {this.state.genreMenu.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                </select>}

                {this.state.displayedCat.length > 0 && <ContentReel list={this.state.displayedCat} title={this.state.displayedCat} title={this.convertIDtoString(this.state.selectedCat)}></ContentReel>}
            </div>
        )
    }
}

export default TVGenre