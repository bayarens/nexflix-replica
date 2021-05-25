import React from 'react'
import {movieGenres, movieDiscover} from '../networkRequest'
import ContentReel from './ContentReel'

class MovieGenre extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            genreMenu: [],
            displayedCat: []
        }
    }

    
    componentDidMount(){
        movieGenres()
            .then(res => this.setState({ genreMenu: res.genres }))
    }
    
    dropDownMenu = (e) => {
        movieDiscover(e.target.value)
            .then(res => this.setState({ displayedCat: res.results })) 
    }

    render() {
        return (
            <div>
                {this.state.genreMenu.length > 0 && <select onChange={this.dropDownMenu}>
                    <option disabled selected value="">Categories</option>
                    {this.state.genreMenu.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                </select>}

                {this.state.displayedCat.length > 0 && <ContentReel list={this.state.displayedCat} title='selected category'></ContentReel>}
            </div>
        )
    }
}

export default MovieGenre