import {getTrending, getTrendingMovies, getTrendingTv } from './api.js'
import {baseurl} from './confij.js'

getTrending(baseurl);
getTrendingMovies(baseurl);
getTrendingTv(baseurl);