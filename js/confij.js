//import dotenv from 'dotenv';
//dotenv.config();
export const BASEURL = "https://api.themoviedb.org/3/";
export const person = "Di Caprio";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2M2NzJmNmNhZTk5ZWFjOWVmZGVmNTJiYTMwMjBiYSIsInN1YiI6IjY1ZTVmOTk3YmU3ZjM1MDE2M2IzMjNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yE-h4OyYMxKBxjsBo21cBjIyIneN3md2f4p_UI3MTSs"
export const OPTS = {
    headers: {
        'content-Type': "application/json",
        //'Authorization': `Bearer ${process.env.API_KEY}` 
        "Authorization": `Bearer ${API_KEY}` 
    }
}
