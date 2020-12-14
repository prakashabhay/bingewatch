import axios from 'axios';
import { search } from '../utils';

const apiKey = 'd3f911246b35d572263bb56eb35dc5aa';
const url = 'https://api.themoviedb.org/3';
const movieUrl = `${url}/movie`;

export const getMovies = async (searchValue) => {
    const URL = `${url}/search/movie`;
try {
    const result = await search(`${URL}?query=${searchValue}&api_key=${apiKey}`);
    const posterBaseUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = result.map((movie) => ({
        id: movie.id,
        backPoster: posterBaseUrl + movie.backdrop_path,
        popularity: movie.popularith,
        title: movie.title,
        poster: movie.poster_path ? posterBaseUrl + movie.poster_path:'',
        overview: movie.overview,
        rating: movie.vote_average,
    })).filter((it)=>{
        return it.poster;
    });
    return modifiedData;
} catch (error) {
}
};

export const fetchMovieVideos = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
            params: {
                api_key: apiKey,
            }
        });
        return data['results'][0];
    } catch (error) { }
}

