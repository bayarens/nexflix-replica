import React from "react"
import { popularMovie } from '../networkRequest'

class DisplayMovie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        popularMovie()
            .then(res => this.setState({ movies: res.results }))
    }


    render() {
        return (
            <div id='movie'>
                {this.state.movies.map(movie => <div key={movie.title}>
                    <p>{movie.title}</p>
                    <p>{movie.overview}</p>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </div>)}
            </div>
        )
    }
}

export default DisplayMovie