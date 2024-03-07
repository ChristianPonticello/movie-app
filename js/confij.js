import dotenv from 'dotenv';
dotenv.config();
export const BASEURL = "https://api.themoviedb.org/3/";
export const person = "Di Caprio";


export const OPTS = {
    headers: {
        'content-Type': "application/json",
        'Authorization': `Bearer ${process.env.API_KEY}` 
    }
}
