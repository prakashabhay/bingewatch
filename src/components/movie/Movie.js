import React, { useState,useEffect } from "react";
import {Popover,OverlayTrigger} from 'react-bootstrap';

import { fetchMovieVideos } from "../../service";
import "./movie.css";
import { MoviePlayer } from "../movieplayer/MoviePlayer";
import { MovieTile } from './MovieTile';
import Spinner from "../Spinner";

export function Movie(props) {
  const [favourites, setFavourites] = useState([]);
	const [watchlaterMovies, setWatchlaterMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState([]);

  const {movieList,isLoading} = props;

  useEffect(() => {
    if(favourites.length>0){
      favourites.forEach(favMovie => {
        movieList && movieList.forEach((movie,index) => {
          if (favMovie.id === movie.id) {
            movieList[index]['isFav'] = true;
          }
        });
      });
    }

    if(watchlaterMovies.length>0){

      watchlaterMovies.forEach(favMovie => {
        movieList && movieList.forEach((movie,index) => {
          if (favMovie.id === movie.id) {
            movieList[index]['isAddedToWatchList'] = true;
          }
        });
      });
    }

  }, [movieList,favourites,watchlaterMovies]);

	const addFavouriteMovie = (movie) => {
    let updatedFavouriteList = [];
    const isMovieInFavList = favourites.filter((item)=>{
      return movie.id === item.id
    })

    if(isMovieInFavList.length>0){
      movie['isFav'] = false;
      updatedFavouriteList = favourites.filter(
        (favourite) => favourite.id !== movie.id
      );
    }else{
      movie['isFav'] = true;
      updatedFavouriteList = [...favourites, movie];
    }
		setFavourites(updatedFavouriteList);
	};

	const addWatchLaterMovie = (movie) => {
    let updatedWatchLtrList = []
    const isMovieInWatchList = watchlaterMovies.filter((item)=>{
      return movie.id === item.id
    })
    if(isMovieInWatchList.length>0){
      movie['isAddedToWatchList'] = false;
      updatedWatchLtrList = watchlaterMovies.filter(
        (item) => item.id !== movie.id
      );
    }else{
      movie['isAddedToWatchList'] = true;
      updatedWatchLtrList = [...watchlaterMovies, movie];
    }
		
		setWatchlaterMovies(updatedWatchLtrList);
	};

  const openVideoPlayer = (value) =>{
    setIsOpen(value);
  }

  const playVideo = (movie) =>{
    const fetchAPI = async () => {
      setVideo(await fetchMovieVideos(movie.id));
      setIsOpen(true);
    };
    fetchAPI();
  }

const movieOverLayView = (movie)=>{
  const favClass = movie.isFav? 'fa fa-heart':'fa fa-heart-o';
  const watchListClass = movie.isAddedToWatchList? 'fa fa-bookmark':'fa fa-bookmark-o'
  return (<Popover id="popover-basic">
  <Popover.Content>
  <ul className="navbar">
    <li onClick={() => addFavouriteMovie(movie)}><span><i className={favClass} aria-hidden="true"></i> Favourite</span></li>
    <li onClick={() => addWatchLaterMovie(movie)}><span><i className={watchListClass} aria-hidden="true"></i> WatchList</span></li>
  </ul>
  </Popover.Content>
</Popover>)
}

 const movieNoshowMessage = <div className='col text-center lead'>Movie list is empty</div>

  const movieListView = movieList && movieList.map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6" key={index}>
        <OverlayTrigger key={item.id} trigger="click" rootClose={true} placement="bottom" overlay={movieOverLayView(item)}>
          <div className='glyphicons_v2'>
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </OverlayTrigger>
        <div className="card">
            <img className="img-fluid movieImg" src={item.poster} alt={item.title}></img>
        </div>
         <div className='video-overlay' onClick={() => playVideo(item)}>
         <i
            className="far fa-play-circle playButton"
          ></i>
        </div>
        
        <div className="mt-3">
          <p data-testid="title" style={{ fontWeight: "bolder" }}>{item.title}</p>
          <p>Rated: {item.rating}</p>
        </div>
      </div>
    );
  });

  const VideoPlayer = ((movieList&&movieList.length>0) || (watchlaterMovies && watchlaterMovies.length>0) || (favourites && favourites.length>0))? <MoviePlayer video = {video} openVideoPlayer = {openVideoPlayer} isOpen = {isOpen}/>:'';
  return (
    <div className="container">
      {VideoPlayer}
      {isLoading && <Spinner />}
      <div className="row" >
        <div className="col">
          <p data-testid="title" className="font-weight-bold listHeader">
           Movies
          </p>
        </div>
      </div>
      <div className="row">{movieList && movieList.length>0 ?movieListView:movieNoshowMessage}</div>
      <div className="row" >
        <div className="col">
          <p className="font-weight-bold listHeader">
           Favourite Movie List
          </p>
        </div>
      </div>
      <div className="row"><MovieTile movies ={favourites} playVideo = {playVideo}/></div>

      <div className="row">
        <div className="col">
          <p className="font-weight-bold listHeader">
            Watch Later List
          </p>
        </div>
      </div>
      <div className="row"><MovieTile movies ={watchlaterMovies} playVideo = {playVideo}/></div>
    </div>
  );
}
