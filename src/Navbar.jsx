import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>IMDB</h1>
            <input type="text" placeholder='Searche movies by title, cast, director...' />
            <div className='nav-tabs'>
                <Link to={"/"}><p>Movies</p></Link>
                <Link to={"/watchlist"}><p>Watchlist</p></Link>
                {/* <Link to={"/"}><p>Starred Movies</p></Link> */}
            </div>
        </nav>
    )
}

export default Navbar