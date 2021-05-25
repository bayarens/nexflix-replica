import React from 'react'
import {Link} from 'react-router-dom'
export default function NavBar(props){
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/tv'>TV</Link>
        </div>
    )
}