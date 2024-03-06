

const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const urlMovie = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const urlTv = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';



const opts = {
    method: "GET",
    headers: {
        'content-Type': "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2M2NzJmNmNhZTk5ZWFjOWVmZGVmNTJiYTMwMjBiYSIsInN1YiI6IjY1ZTVmOTk3YmU3ZjM1MDE2M2IzMjNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yE-h4OyYMxKBxjsBo21cBjIyIneN3md2f4p_UI3MTSs'
    }
}

export const getTrending = async (baseurl) => {

    const response = await fetch( baseurl + "all/day?language=en-US" ,opts);

    const data = await response.json();

    return data;

}

export const getTrendingMovies = async(baseurl) => {
    const response = await fetch( baseurl + "movie/day?language=en-US" ,opts);
    const data = await response.json();

    return data;

}

export const getTrendingTv = async(baseurl) => {
    const response = await fetch( baseurl + "tv/day?language=en-US" ,opts);
    const data = await response.json();

    return data;

}



