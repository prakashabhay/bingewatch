export const WatchList = (props) => {
    const {movie , playVideo} = props;
    return (
      <div className="col-md-3 col-sm-6">
        <div className="card">
            <img className="img-fluid movieImg" src={movie.poster} alt={movie.title}></img>
        </div>
        <div className='video-overlay' onClick={() => playVideo(movie)}>
         <i
            className="far fa-play-circle playButton"
          ></i>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{movie.title}</p>
          <p>Rated: {movie.rating}</p>
        </div>
      </div>
    );
};
