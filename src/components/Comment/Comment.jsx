import React, { useState } from 'react';
import Style from './Comment.module.css';
import { MovieDetails, CommentsMovie } from '../../hooks/CustomHooks';
import { Link } from 'react-router-dom';
import image_404 from '../../img/404.jpg';

const Comment = ({ match: { params: { id } } }) => {

    const { data: movie, loading: loadingMovie, error: errorMovie } = MovieDetails(id);
    const { data: comments, loadingComment, errorComment } = CommentsMovie(id);

    console.log(comments)

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

            <section className={Style.container}>
                {comments ? <h2 className={Style.h2}>Comments <span className={Style.counter}> ({comments ? comments.length : 0}) </span></h2> : <h2 className={Style.h2}>Comments Not Available</h2>}
                {comments ? comments.map(comment => (

                    <section className={Style.cast}>
                        <div className={Style.comments}>
                            <a href={comment.url} style={{ textDecoration: 'none', color: '#000' }}>
                                <h2> A review by {comment.author} </h2>
                            </a>
                            <h5 style={{ marginBottom: '10px', color: '1px solid rgba(77,67,74, .2)' }}> Written by {comment.author} </h5>
                            <p style={{ whiteSpace: 'pre-line' }}> {comment.content} </p>
                            <a href={comment.url} className={Style.info}>Full Info</a>
                        </div>
                    </section>
                )) : "Not Available"}
            </section>

        </>
    )
}

export default Comment
