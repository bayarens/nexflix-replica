import React from 'react'

function ContentReel(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <span id='reel'>
                {props.list.map(item => <div className="contentCard" key={item.id}>
                    <span id='title'>{item.title || item.name}</span>
                    <img id='poster' src={(item.poster_path || item.profile_path)?`https://image.tmdb.org/t/p/w500${item.poster_path || item.profile_path }`:'https://bitsofco.de/content/images/2018/12/broken-1.png'} alt={item.title} />
                    <p id='overview'>{item.overview}</p>
                </div>)}
            </span>
        </div>
    )
}

export default ContentReel