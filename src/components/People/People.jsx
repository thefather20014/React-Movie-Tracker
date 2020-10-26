import React from 'react';
import { SearchPeople, AllCredits, AllSocialNetworks } from '../../hooks/CustomHooks';
import Style from './People.module.css';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import image_404 from '../../img/404.jpg';

const People = ({ match: { params: { id } } }) => {


    const { data, loading, error } = SearchPeople(id);
    const { data: data2, loading: loading2, error: error2 } = AllCredits(id);
    const { data: data3, loading: loading3, error: error3 } = AllSocialNetworks(id);
    console.log(data2);
    console.log(data);

    const death = {
        display: data.deathday ? 'block' : 'none'
    }

    const knowAs = {
        display: data.also_known_as !== undefined && data.also_known_as.length > 0 ? 'block' : 'none'
    }

    const facebook = {
        display: data3.facebook_id ? 'inline-block' : 'none',
    }

    const twitter = {
        display: data3.twitter_id ? 'inline-block' : 'none',
    }

    const instagram = {
        display: data3.instagram_id ? 'inline-block' : 'none',
    }

    return (
        <>
            <section className={Style.container}>
                <div className={Style.personaInfo}>
                    <img className={Style.img} src={data.profile_path ? `https://image.tmdb.org/t/p/original/${data.profile_path}` : image_404} />
                    <div className={Style.icon}>

                        <a style={facebook} href={data3.facebook_id ? `https://www.facebook.com/${data3.facebook_id}` : ""} target="_blank">
                            <i className="fab fa-facebook-square"></i>
                        </a>

                        <a style={twitter} href={data3.twitter_id ? `https://www.twitter.com/${data3.twitter_id}` : ""} target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>

                        <a style={instagram} href={data3.instagram_id ? `https://www.instagram.com/${data3.instagram_id}` : ""} target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>

                    </div>

                    <div className={Style.info}>

                        <h2>Personal Info</h2>

                        <h4>Know For</h4>
                        <p>{data.known_for_department}</p>

                        <h4>Known Credits (Movies)</h4>
                        <p>{data2.length}</p>

                        <h4>Gender </h4>
                        <p>{data.gender === 1 ? 'Female' : 'Male'}</p>

                        <h4>Birthday </h4>
                        <p>
                            {data.birthday ? data.birthday : 'Info Not Available'}
                            {data.birthday ? <span style={{ marginLeft: '5px', display: data.deathday ? 'none' : 'inline-block' }}>
                                (<Moment diff={data.birthday} unit="years">{new Date().toLocaleDateString()}</Moment> years old)
                            </span> : ''}
                        </p>

                        <h4 style={death}>Day of Death </h4>
                        <p style={death}>
                            {data.deathday ? data.deathday : 'Info Not Available'}
                            {data.deathday ? <span style={{ marginLeft: '5px' }}>
                                (<Moment diff={data.birthday ? data.birthday : ""} unit="years">{data.deathday ? data.deathday : ""}</Moment> years old)
                            </span> : ''}
                        </p>

                        <h4>Place of Birth </h4>
                        <p>{data.place_of_birth ? data.place_of_birth : 'Info Not Available'}</p>

                        <h4 style={knowAs}>Also Known As </h4>
                        <div style={knowAs}>{data.also_known_as ? data.also_known_as.map(know => <p key={know}> {know} </p>) : 'Info Not Available'}</div>

                    </div>
                </div>
                <div className={Style.fullInfo}>

                    <h1> {data.name ? data.name : 'Info Not Available'} </h1>
                    <h2>Biography</h2>
                    { data.biography ? <p className={Style.paragraph}>{data.biography}</p> : "Info Not Available" }
                    <hr className={Style.hr} />

                    <h2>Known For</h2>
                    <div className={Style.knownFor}>
                        {data2 ? data2.slice(0, 12).map(credit => (
                            <a key={credit.id} href={`/details/${credit.id}`} style={{ textDecoration: 'none', color: '#000' }}>
                                <div className={Style.innerContent}>
                                    {credit.poster_path !== null ? <img src={`https://image.tmdb.org/t/p/original/${credit.poster_path}`} /> : <img src={image_404} style={{ width: '150px', height: '225px' }} />}
                                    <p style={{ margin: '5px 0 12px 0', fontSize: '13px' }}>{credit.title}</p>
                                </div>
                            </a>)) : ""}
                    </div>
                    {data2.length > 12 ? <Link to={`/knowfor/${id}`}><p className={Style.more}>Show All Known For</p></Link> : ''}
                    { /* year - name of movie - character */}
                    <h2>Acting</h2>
                    <div className={Style.acting}>
                        {data2.map(credit => (
                            <a href={`/details/${credit.id}`} style={{ textDecoration: 'none', color: '#000' }}>
                                <div className={Style.actingContainer} style={{ display: credit.character && credit.title ? 'flex' : 'none' }}>
                                    <span>{credit.release_date ? new Date(credit.release_date).getFullYear() : "Not Available"}</span> <div className={Style.circle}></div> <span className={Style.spanSpacing}>{credit.title ? credit.title : "Not Available"}</span>
                                    <span className={Style.as}> as </span> <span className={Style.charater}> {credit.character ? credit.character : "Not Available"}</span>
                                </div>
                            </a>))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default People

