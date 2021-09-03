import axios from 'axios';
import Movie from '../models/Movie';

const baseUrl: string = `http://www.omdbapi.com/?apikey=cc496d57`;

export const searchMovies = async (input: string): Promise<Movie[]> => {
  // todo improve pagination
  let url = baseUrl + '&s={' + input.trim() + '}&page=1';

  var movies = await axios.get(url);
  let {data} = movies;

  return data.Search;
};
