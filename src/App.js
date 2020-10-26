import React, { useState } from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Search, Nav, Details, People, Footer, CastCrew, Comment, Recommendation, KnowFor } from './components/components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const [ search, setSearch ] = useState('');

    return (
        <>
            <Router>
                <Nav />
                <Switch>

                    <Route exact path="/">
                       <Search search={ search } setSearch={ setSearch }/>
                    </Route>

                    <Route path="/details/:id" component={ Details }/>
                    <Route path="/people/:id" component={ People }/>
                    <Route path="/cast&crew/:id" component={ CastCrew }/>
                    <Route path="/knowfor/:id" component={ KnowFor }/>
                    <Route path="/comment/:id" component={ Comment }/>
                    <Route path="/recommendation/:id" component={ Recommendation }/>

                </Switch>
                <Footer/>
            </Router>
        </>
    )
}

export default App
