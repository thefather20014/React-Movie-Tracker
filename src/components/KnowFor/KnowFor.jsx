import React from 'react';
import Style from './KnowFor.module.css';
import { SearchPeople, AllCredits } from '../../hooks/CustomHooks';
import { Link } from 'react-router-dom';
import image_404 from '../../img/404.jpg';

const KnowFor = ({ match: { params: { id } } }) => {

    console.log(id);
    const { data, loading, error } = SearchPeople(id);
    const { data: credits, loading: loading2, error: error2 } = AllCredits(id);

    return (
        <>
            <header>
                <Link to={`/people/${id}`} style={{ textDecoration: 'none', color: '#000' }}>
                    <section className={Style.content}>
                    { data.profile_path ? <img src={`https://image.tmdb.org/t/p/original/${data.profile_path}`}/> : <img src={image_404} /> }
                        <section>
                            <h2 className={Style.name}>{data.name}</h2>
                            <p className={Style.back}> <i class="fas fa-arrow-left"></i> Back to People </p>
                        </section>
                    </section>
                </Link>
            </header>

            <h3 className={Style.h3}>Known For <span className={Style.counter}> ({credits ? credits.length : 0})</span></h3>

            <section className={Style.container}>
                {credits ? credits.map(credit => (
                    <a href={`/details/${credit.id}`} style={{ textDecoration: 'none', color: '#000' }}>
                        <div>
                            { credit.poster_path ? <img src={`https://image.tmdb.org/t/p/original/${credit.poster_path}`}/> : <img src={image_404} /> }
                            <p>{credit.title}</p>
                        </div>
                    </a>)) : "Not Available"}
            </section>
        </>
    )
}

export default KnowFor
