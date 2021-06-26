import React from 'react'
import { popularTV, topRatedTV, nowPlayingTV, airingToday } from '../networkRequest'
import ContentReel from './ContentReel'
import TVGenre from './TVGenres';

class DisplayTV extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            popTV: [],
            topRatedTV: [],
            nowPlayingTV: [],
            airingToday: []
        }
    }

    componentDidMount() {
        popularTV()
            .then(res => this.setState({ popTV: res.results }))
        topRatedTV()
            .then(res => this.setState({ topRatedTV: res.results }))
        nowPlayingTV()
            .then(res => this.setState({ nowPlayingTV: res.results}))
        airingToday()
            .then(res => this.setState({ airingToday: res.results}))
    }

    render() {
        return(
            <React.Fragment>
                <TVGenre></TVGenre>
                <ContentReel list ={this.state.airingToday} title ='Airing Today' />
                <ContentReel list ={this.state.nowPlayingTV} title ='TV Shows Now Playing'/>
                <ContentReel list ={this.state.popTV} title ='Popular TV Shows'/>
                <ContentReel list ={this.state.topRatedTV} title ='Top Rated TV Shows'/>
            </React.Fragment>
        )
    }
}

export default DisplayTV