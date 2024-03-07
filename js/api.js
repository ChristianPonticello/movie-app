import { BASEURL, OPTS } from "./confij.js";

const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const urlMovie = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const urlTv = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';
const urlPerson = 'https://api.themoviedb.org/3/search/person';



export const getTrending = async () => {

    const response = await fetch( BASEURL + "trending/all/day?language=en-US" ,OPTS);

    const data = await response.json();

    return data;

}

export const getTrendingMovies = async() => {
    const response = await fetch( BASEURL + "trending/movie/day?language=en-US" ,OPTS);
    const data = await response.json();

    return data;

}

export const getTrendingTv = async() => {
    const response = await fetch( BASEURL + "trending/tv/day?language=en-US" ,OPTS);
    const data = await response.json();

    return data;

}

export const getTrendingPerson = async(person) => {
    const response = await fetch( BASEURL + `search/person?query=${person}` ,OPTS);
    const data = await response.json();

    return data;

}



