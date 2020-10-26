import React, { useState } from 'react';
import Cards from './Cards/Cards';
import Style from './Search.module.css';
import logoLoading from '../../img/logo.gif';
import Pagination from '../Pagination/Pagination';
import { SearchMoviesHook } from '../../hooks/CustomHooks';
import CountUp from 'react-countup';

const Search = ({ search, setSearch }) => {

    const [currentPage, setCurrentPage] = useState(1);

    const { data, loading, error } = SearchMoviesHook(search, currentPage);

    /* console.log(data.total_pages)
     console.log(data.total_results)*/

    const Search = e => setSearch(e.target.value);

    if (!loading) {
        return <div className={Style.loading} >
                 <img src={logoLoading} />
            </div>
    }

    return (
        <div className={Style.container}>
            <form>
                <input type="text" placeholder="Search for a movie" onChange={Search} className={Style.input} />
                <p className={Style.more}>
                    About <CountUp
                        start={0}
                        end={data.total_results ? data.total_results : 0}
                        duration={1.5}
                        separator=","
                    /> results
                </p>
            </form>

            <div className={Style.container2}>
                {data.results ? data.results.map(data => <Cards data={data} key={data.id} />) : ''}
            </div>

            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={data.total_pages} />

        </div>
    )
}

export default Search
