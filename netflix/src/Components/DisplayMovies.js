import React from "react"
import { popularMovie, topRatedMovie } from '../networkRequest'

class DisplayMovie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            popMovies: [],
            topRatedMovies: []
        }
    }

    componentDidMount() {
        popularMovie()
            .then(res => this.setState({ popMovies: res.results }))
        topRatedMovie()
            .then(res => this.setState({ topRatedMovies: res.results }))
    }


    render() {
        return (
            <React.Fragment>
                <span id='popMovie'>
                    {this.state.popMovies.map(popMovies => <div key={popMovies.title}>
                        <span>{popMovies.title}</span>
                        <p>{popMovies.overview}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${popMovies.poster_path}`} />
                    </div>)}
                </span>

                <span id='tRMovie'>
                    {this.state.topRatedMovies.map(topRatedMovies => <div key={topRatedMovies.title}>
                        <span>{topRatedMovies.title}</span>
                        <p>{topRatedMovies.overview}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${topRatedMovies.poster_path}`} />
                    </div>)}
                </span>
            </React.Fragment>
        )
    }
}

export default DisplayMovie