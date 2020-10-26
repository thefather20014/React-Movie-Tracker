import React, { useState } from 'react';
import { MovieDetails, CreditsCrew, KeywordsMovie, CommentsMovie, SearchRecommendations, ApisVideos } from '../../hooks/CustomHooks';
import Style from './Details.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import image_404 from '../../img/404.jpg';
import userImg from '../../img/user.svg';
import ReactPlayer from 'react-player';

const Details = ({ match: { params: { id } } }) => {

    const { data, loading, error } = MovieDetails(id);
    const { data: data2, loading2, error2 } = CreditsCrew(id);
    const { data: data3, loading3, error3 } = KeywordsMovie(id);
    const { data: data4, loading4, error4 } = CommentsMovie(id);
    const { data: data5, loading5, error5 } = SearchRecommendations(id);
    const { data: videos, loadingVideos, errorVideos } = ApisVideos(id);
    const [btn, setBtn] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);
    const [btn4, setBtn4] = useState(false);
    const [comment1, setComment1] = useState(false);

    const activeBtn = () => setBtn(!btn);
    const activeBtn2 = () => setBtn2(!btn2);
    const activeBtn3 = () => setBtn3(!btn3);
    const activeBtn4 = () => setBtn4(!btn4);

    console.log(videos);

    //console.log(data)
    /*console.log(data2.crew)*/
    //console.log(data2.cast)
    console.log(data)

    return (
        <>
            <section className={Style.container} style={{ background: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path}) no-repeat center center/cover` }}>
                <div className={Style.overlay}>
                    <div className={Style.inner}>
                        {data.poster_path ? <div className={Style.innerImg} ><img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} /></div> : <img src={image_404} />}
                        <div className={Style.content}>
                            <h1 className={Style.title}> {data.title} <strong className={Style.lighter}> ({data.release_date && data.release_date.substring(0, 4)}) </strong> </h1>
                            <div className={Style.innerUp}>
                                <span className={Style.span}> {data.release_date}</span> <span style={{ marginLeft: '5px' }}> ({data.production_countries && data.production_countries.length > 0 ? data.production_countries[0].iso_3166_1 : "Not available"}) </span> <div className={Style.circle}></div>
                                {data.genres ? data.genres.map(genre => <span className={Style.genre}> {genre.name}, </span>) : null} <div className={Style.circle}></div> <span> {data.runtime}m </span>
                            </div>
                            <div className={Style.icons}>
                                <i className={cx("fas fa-list", btn ? Style.btnActive : "")} onClick={activeBtn}></i>
                                <i className={cx("fas fa-heart", btn2 ? Style.btnActive : "")} onClick={activeBtn2}></i>
                                <i className={cx("fas fa-tag", btn3 ? Style.btnActive : "")} onClick={activeBtn3}></i>
                                <i className={cx("fas fa-star", btn4 ? Style.btnActive : "")} onClick={activeBtn4}></i>
                            </div>
                            <p className={Style.tagline}> {data.tagline} </p>
                            <h2 className={Style.strong}> Overview </h2>
                            <p> {data.overview} </p>
                            <div className={Style.crew}>
                                <div>
                                    {data2.crew ? <p className={Style.strong}> {data2.crew && data2.crew[0] ? data2.crew[0].job : "Not Available"} </p> : <p>Not Availabe</p>}
                                    {data2.crew ? <p> {data2.crew && data2.crew[0] ? data2.crew[0].name : "Not Available"} </p> : <p>Not Availabe</p>}
                                </div>
                                <div>
                                    {data2.crew ? <p className={Style.strong}> {data2.crew && data2.crew[1] ? data2.crew[1].job : "Not Available"} </p> : <p>Not Availabe</p>}
                                    {data2.crew ? <p> {data2.crew && data2.crew[1] ? data2.crew[1].name : "Not Available"} </p> : <p>Not Availabe</p>}
                                </div>
                                <div>
                                    {data2.cast ? <p className={Style.strong}> {data2.cast && data2.cast[0] ? data2.cast[0].character : "Not Available"} </p> : <p>Not Availabe</p>}
                                    {data2.cast ? <p> {data2.cast && data2.cast[0] ? data2.cast[0].name : "Not Available"} </p> : <p>Not Availabe</p>}
                                </div>
                                <div>
                                    {data2.cast ? <p className={Style.strong}> {data2.cast && data2.cast[1] ? data2.cast[1].character : "Not Available"} </p> : <p>Not Availabe</p>}
                                    {data2.cast ? <p> {data2.cast && data2.cast[1] ? data2.cast[1].name : "Not Available"} </p> : <p>Not Availabe</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            { /*-------------------------------------------------Down Container--------------------------------------------------*/}

            <section className={Style.lowerContainer}>
                <div className={Style.billedCast}>
                    <h2 >Top Billed Cast</h2>
                </div>
                <section className={Style.grid}>
                    <section className={Style.borderCast}>
                        <section className={Style.castContainer}>
                            {data2.cast ? data2.cast.slice(0, 6).map((cast, index) => (
                                <Link to={`/people/${cast.id}`} style={{ textDecoration: 'none', color: '#000' }}>
                                    <div className={Style.cast}>
                                        {cast.profile_path ? <img src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} /> : <img src={userImg} />}
                                        <div>
                                            <p className={Style.strong}>{cast.name}</p>
                                            <p >{cast.character}</p>
                                        </div>
                                    </div>
                                </Link>
                            )) : <h2 className={Style.title}>Not Data</h2>}
                        </section>

                        <Link to={`/cast&crew/${id}`}>
                            {data2.cast ? <p className={Style.more2}>Full Cast & Crew</p> : ''}
                        </Link>

                    </section >

                    { /*-------------------------------------------------------------------------------------------------------------------------------*/ }

                    <section className={Style.rightContent}>
                        <h2 className={Style.extra}>Extra information</h2>
                        <div>
                            <a className={Style.homepage} href={data.homepage} style={{ display: data.homepage ? 'block' : 'none' }} target="_blank"><i class="fas fa-link fa-2x"></i></a>
                            <p className={Style.strongContent}>Status</p>
                        </div>
                        <div>
                            <p>{data.status}</p>
                            <p className={Style.strongContent}>Original Language</p>
                        </div>
                        <div>
                            <p>{data.original_language === 'en' ? 'English' : data.original_language === 'fr' ? 'Francais' : data.original_language === 'ja' ? 'Japan' : data.original_language === 'no' ? 'Norsk' : data.original_language === 'es' ? 'Spanish' : data.original_language === 'ru' ? 'Russian' : data.original_language}</p>
                        </div>
                        <div>
                            <p className={Style.strongContent}>Budget</p>
                            <CountUp
                                start={0}
                                end={data.budget ? data.budget : 0}
                                duration={2.5}
                                separator=","
                                prefix="$"
                            />
                        </div>

                        <div>
                            <p className={Style.strongContent}>Revenue</p>
                            <p> <CountUp
                                start={0}
                                end={data.revenue ? data.revenue : 0}
                                duration={2.5}
                                separator=","
                                prefix="$"
                            />
                            </p>
                        </div>

                        <div>
                            <p className={Style.strongContent}>Popularity</p>
                            <p ><CountUp
                                start={0}
                                end={data.popularity ? data.popularity : 0}
                                duration={2.5}
                                separator=","

                            />
                            </p>
                        </div>

                        <div>
                            <p className={Style.strongContent}>Vote Count</p>
                            <p ><CountUp
                                start={0}
                                end={data.vote_count ? data.vote_count : 0}
                                duration={2.5}
                                separator=","
                            />
                            </p>
                        </div>

                    </section>

                    <section>

                        <hr className={Style.hr2} />
                        <h2 className={Style.commentTitle}>Reviews</h2>
                        <p style={{ margin: '10px 0' }}> {data4.length < 1 ? "Not Comment Available" : ""} </p>
                        {data4.slice(0, 1).map(comment => (
                            <div className={Style.comments}>
                                <h2> A review by {comment.author} </h2>
                                <h5 style={{ marginBottom: '10px', color: '1px solid rgba(77,67,74, .2)' }}> Written by {comment.author} </h5>
                                <p style={{ whiteSpace: 'pre-line' }}> {comment1 ? comment.content : comment.content.substring(0, 150)}
                             ... <a onClick={() => setComment1(!comment1)} className={comment1 ? Style.urlActive : Style.urlUnActive}>{comment1 ? 'See Less' : 'See More'}</a> </p>

                            </div>
                        ))}

                        {data4.length > 1 ? <Link to={`/comment/${id}`}><p className={Style.more}>Read All Reviews</p></Link> : ''}

                        <hr className={Style.hr} />

                    </section>

                    <section className={cx(Style.keywords, Style.rightContent)}>
                        <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Keywords</h2>
                        <div>
                            {data3.map(keyword => <p> {keyword.name} </p>)}
                        </div>
                    </section>

                    <section className={Style.spacing}>
                        <h2 className={Style.commentTitle} style={{ marginBottom: '15px' }}>Popular Videos</h2>
                        <section className={Style.video} style={{ width: '100%' }}>
                            {videos ? videos.slice(0, 4).map(video => (
                                <section>
                                    <ReactPlayer
                                        url={`https://www.youtube.com/watch?v=${video.key}`}
                                        width="475"
                                        controls
                                        className={Style.player}
                                    />
                                </section>
                            )) : ''}

                            {videos.length < 1 ? <p>Not Videos Available</p> : ''}
                        </section>

                        <hr className={Style.hr} />

                        <h2 className={Style.commentTitle}>Recommendations</h2>
                        <p style={{ margin: '10px 0' }}> {data5.length < 1 ? "Not Recommendation Available" : ""} </p>
                        <div className={Style.recommendation}>
                            {data5.slice(0, 12).map(recommendation => (
                                <a href={`/details/${recommendation.id}`} style={{ textDecoration: 'none', color: '#000' }}>
                                    <div>
                                        <img src={recommendation.poster_path ? `https://image.tmdb.org/t/p/original/${recommendation.poster_path}` : image_404} />
                                        <p style={{ marginTop: '10px' }}>{recommendation.title}</p>
                                    </div>
                                </a>))}

                            {data5.length > 12 ? <Link to={`/recommendation/${id}`} style={{ textDecoration: 'none', color: '#000' }}><p className={Style.more}>Show All Recommendations</p></Link> : ''}

                        </div>
                    </section>

                </section>
            </section>

        </>
    )
}

export default Details
