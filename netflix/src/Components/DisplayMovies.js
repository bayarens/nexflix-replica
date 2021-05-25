import React from "react"
import { popularMovie, topRatedMovie, nowPlayingMovie } from '../networkRequest'
import ContentReel from './ContentReel'
import MovieGenre from "./MovieGenres";


class DisplayMovie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            popMovies: [],
            topRatedMovies: [],
            nowPlayingM: [],
        }
    }

    componentDidMount() {
        popularMovie()
            .then(res => this.setState({ popMovies: res.results }))
        topRatedMovie()
            .then(res => this.setState({ topRatedMovies: res.results }))
        nowPlayingMovie()
            .then(res => this.setState({ nowPlayingM: res.results }))
    }


    render() {
        return (
            <React.Fragment>
                <MovieGenre></MovieGenre>
                <ContentReel list={this.state.nowPlayingM} title='Now Playing'/>
                <ContentReel list={this.state.popMovies} title='Popular Movies'/>
                <ContentReel list={this.state.topRatedMovies} title='Top Rated'/>
            </React.Fragment>
        )
    }
}

export default DisplayMovie