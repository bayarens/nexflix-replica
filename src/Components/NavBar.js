import React from 'react'
import {Link} from 'react-router-dom'
export default function NavBar(props){
    return(
        <div id='navBar'>
            <Link to='/'> <button className="button">Home</button></Link>
            <Link to='/movies'> <button className="button">Movies</button></Link>
            <Link to='/tv'><button className="button">TV</button></Link>
        </div>
    )
}