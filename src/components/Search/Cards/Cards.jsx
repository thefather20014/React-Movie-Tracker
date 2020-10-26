import React from 'react';
import Style from './Cards.module.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Cards = ({ data: { id, poster_path, backdrop_path }}) => {

    return (

        <div className={Style.card} style={{ display: poster_path === null && backdrop_path === null ? 'none' : 'flex' }}>

            <a href={`details/${id}`}>
                <img className={Style.img} src={`https://image.tmdb.org/t/p/original${poster_path || backdrop_path}`} />
            </a>

        </div>
    )
}

export default Cards
