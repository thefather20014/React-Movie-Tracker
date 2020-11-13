import React from 'react';
import Style from './CastCrew.module.css';
import { CreditsCrew, MovieDetails } from '../../hooks/CustomHooks';
import { Link } from 'react-router-dom';
import userImg from '../../img/user.svg';
import image_404 from '../../img/404.jpg';

const CastCrew = ({ match: { params: { id } } }) => {

    const { data, loading, error } = CreditsCrew(id);
    const { data: movie, loading: loadingMovie, error: errorMovie } = MovieDetails(id);

    const crews = data.crew;
    const casts = data.cast;
    console.log(crews)
    console.log(casts)

    return (
        <>
            <header>
                <Link to={`/details/${id}`} style={{ textDecoration: 'none', color: '#000' }}>
                    <section className={Style.content}>
                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : image_404} />
                        <section>
                            <div className={Style.innerContent}>
                                <h2>{movie.title}</h2>
                                <span className={Style.year}>({new Date(movie.release_date).getFullYear()})</span>
                            </div>
                            <p className={Style.back}> <i class="fas fa-arrow-left"></i> Back to Main </p>
                        </section>
                    </section>
                </Link>
            </header>

            <main className={Style.container}>
                <section>
                    {casts ? <h2 className={Style.h2}>Cast <span className={Style.counter}> ({casts ? casts.length : 0}) </span></h2> : <h2 className={Style.h2}>Cast Not Available</h2>}
                    {casts ? casts.map(cast => (
                        <Link to={`/people/${cast.id}`} style={{ textDecoration: 'none', color: '#000' }}>
                            <section className={Style.cast}>
                                <img src={cast.profile_path ? `https://image.tmdb.org/t/p/original/${cast.profile_path}` : userImg} />
                                <div>
                                    <strong style={{ fontSize: '17px', fontWeight: 'bold' }}>{cast.name}</strong>
                                    <p style={{ fontSize: '15px', margin: '5px 0' }}>{cast.character}</p>
                                </div>
                            </section>
                        </Link>)) : "Not Available"}
                </section>
                <section>
                    {crews && crews.length > 0 ? <h2 className={Style.h2}>Crew <span className={Style.counter}> ({crews ? crews.length : 0}) </span></h2> : <h2 className={Style.h2}>Crew Not Available</h2>}
                    {crews ? crews.map(crew => (
                        <Link to={`/people/${crew.id}`} style={{ textDecoration: 'none', color: '#000' }}>
                            <section className={Style.crew}>
                                <img src={crew.profile_path ? `https://image.tmdb.org/t/p/original/${crew.profile_path}` : userImg} />
                                <div>
                                    <strong style={{ fontSize: '17px', fontWeight: 'bold' }}>{crew.name}</strong>
                                    <p style={{ fontSize: '15px', fontWeight: 'bold', margin: '5px 0' }}>{crew.department}</p>
                                    <p>{crew.job}</p>
                                </div>
                            </section>
                        </Link>)) : "Not Available"}
                </section>
            </main>
        </>
    )
}

export default CastCrew
