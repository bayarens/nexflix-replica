import React from 'react'
import { tvGenres, tvDiscover } from '../networkRequest'
import ContentReel from './ContentReel'

class TVGenre extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            genreMenu: [],
            displayedCat: []
        }
    }


    componentDidMount() {
        tvGenres()
            .then(res => this.setState({ genreMenu: res.genres }))
    }

    dropDownMenu = (e) => {
        tvDiscover(e.target.value)
            .then(res => this.setState({ displayedCat: res.results }))
    }

    render() {
        return (
            <div>
                {this.state.genreMenu.length > 0 && <select onChange={this.dropDownMenu}>
                    <option disabled selected value="">Categories</option>
                    {this.state.genreMenu.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                </select>}

                {this.state.displayedCat.length > 0 && <ContentReel list={this.state.displayedCat} title="selected category" ></ContentReel>}
            </div>
        )
    }
}

export default TVGenre