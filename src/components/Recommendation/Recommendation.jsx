import React from 'react';
import { Link } from 'react-router-dom';
import image_404 from '../../img/404.jpg';
import { SearchRecommendations, MovieDetails } from '../../hooks/CustomHooks';
import Style from './Recommendation.module.css';

const Recommendation = ({ match: { params: { id } } }) => {

    const { data: recommendations, loadingRecommendations, errorRecommendations } = SearchRecommendations(id);
    const { data: movie, loading: loadingMovie, error: errorMovie } = MovieDetails(id);
    console.log(recommendations)

    return (
        <>
            <header>
                <Link to={`/details/${id}`} style={{ textDecoration: 'none', color: '#000' }}>
                    <section className={Style.content}>
                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : image_404} />
                        <section>
                            <div>
                                <h2>{movie.title}</h2>
                                <span className={Style.year}>({new Date(movie.release_date).getFullYear()})</span>
                            </div>
                            <p className={Style.back}> <i class="fas fa-arrow-left"></i> Back to Main </p>
                        </section>
                    </section>
                </Link>

            </header>

            <h3 className={Style.h3}>Recommendations <span className={Style.counter}> ({recommendations ? recommendations.length : 0})</span></h3>

            <section className={Style.container}>
                {recommendations ? recommendations.map(recommendation => (
                    <a href={`/details/${recommendation.id}`} style={{ textDecoration: 'none', color: '#000' }}>
                        <div>
                            {recommendation.poster_path ? <img src={`https://image.tmdb.org/t/p/original/${recommendation.poster_path}`} /> : <img src={image_404} />}
                            <p className={Style.title}>{recommendation.title}</p>
                        </div>
                    </a>)) : "Not Available"}
            </section>

        </>
    )
}

export default Recommendation
