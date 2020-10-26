import { searchMovies, searchById, Credits, Keywords, Comments, People, Recommendations, MovieCredits, SocialNetworks, Videos } from '../helpers/Apis';
import { useState, useEffect } from 'react';

export const SearchMoviesHook = ( search, currentPage ) => 
{
    const [ movies, setMovies ] = useState( {
        data: [],
        loading: false,
        error: ''
    } );

      useEffect( () => 
      {
          searchMovies( search, currentPage ).then( data => setMovies( { data, loading: true, error: '' } ) )
          .catch( error => setMovies( { data: [], loading: false, error } ) )
      }, [ search, currentPage ])

      return movies;

};

export const MovieDetails = ( id ) => 
{
    const [ moviesDetails, setMoviesDetails ] = useState( {
        data: [],
        loading: false,
        error: ''
    } );

      useEffect( () => 
      {
          searchById( id ).then( data => setMoviesDetails( { data, loading: true, error: '' } ) )
          .catch( error => setMoviesDetails( { data: [], loading: false, error } ) )
      }, [ id ])

      return moviesDetails;

};

export const CreditsCrew = ( id ) => 
{
    const [ credits, setCredits] = useState( {
        data: [],
        loading: false,
        error: ''
    } );

      useEffect( () => 
      {
          Credits( id ).then( data => setCredits( { data, loading: true, error: '' } ) )
          .catch( error => setCredits( { data: [], loading: false, error } ) )
      }, [ id ])

      return credits;

};

export const KeywordsMovie = ( id ) => 
{
    const [ keyword, setKeyword] = useState( {
        data: [],
        loading: false,
        error: ''
    } );

      useEffect( () => 
      {
        Keywords( id ).then( data => setKeyword( { data, loading: true, error: '' } ) )
          .catch( error => setKeyword( { data: [], loading: false, error } ) )
      }, [ id ])
      return keyword;

};

export const CommentsMovie = ( id ) => 
{
    const [ comments, setComments] = useState( {
        data: [],
        loading: false,
        error: ''
    } );

      useEffect( () => 
      {
        Comments( id ).then( data => setComments( { data, loading: true, error: '' } ) )
          .catch( error => setComments( { data: [], loading: false, error } ) )
      }, [ id ])
      
      return comments;

};

export const SearchPeople = ( id ) => 
{
    const [ people, setPeople ] = useState( {
        data: [],
        loading: false,
        error: ''
    } );

      useEffect( () => 
      {
        People( id ).then( data => setPeople( { data, loading: true, error: '' } ) )
          .catch( error => setPeople( { data: [], loading: false, error } ) )
      }, [ id ])

      return people

};

export const SearchRecommendations = ( id ) => 
{
    const [ recommendation, setRecommendation ] = useState( {
        data: [],
        loading: false,
        error: ''
    } );

      useEffect( () => 
      {
        Recommendations( id ).then( data => setRecommendation( { data, loading: true, error: '' } ) )
          .catch( error => setRecommendation( { data: [], loading: false, error } ) )
      }, [ id ])

      return recommendation

};

export const AllCredits = ( id ) => 
{
    const [ credits, setCredits] = useState( {
        data: [],
        loading: false,
        error: ''
    } );

      useEffect( () => 
      {
        MovieCredits( id ).then( data => setCredits( { data, loading: true, error: '' } ) )
          .catch( error => setCredits( { data: [], loading: false, error } ) )
      }, [ id ])

      return credits

};

export const AllSocialNetworks = ( id ) => 
{
    const [ network, setNetwork] = useState( {
        data: [],
        loading: false,
        error: ''
    } );

      useEffect( () => 
      {
        SocialNetworks( id ).then( data => setNetwork( { data, loading: true, error: '' } ) )
          .catch( error => setNetwork( { data: [], loading: false, error } ) )
      }, [ id ])

      return network

};

export const ApisVideos = ( id ) => 
{
    const [ ApisVideos, setApisVideos] = useState( {
        data: [],
        loading: false,
        error: ''
    } );

      useEffect( () => 
      {
        Videos( id ).then( data => setApisVideos( { data, loading: true, error: '' } ) )
          .catch( error => setApisVideos( { data: [], loading: false, error } ) )
      }, [ id ])

      return ApisVideos

};