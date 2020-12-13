export const MovieTile = (props) => {

    const {movies} = props;

    if(!movies || movies.length<1){
      return <div className='col text-center lead'>Your list is empty</div>
    }

      return movies && movies.map((movie, index) => {
        return (
          <div className="col-md-3 col-sm-6" key ={index}>
          
          <div className="card">
              <img className="img-fluid movieImg" src={movie.poster} alt={movie.title}></img>
          </div>
          <div className='video-overlay' onClick={() => props.playVideo(movie)}>
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
      });
    }