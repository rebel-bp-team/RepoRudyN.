import axios from 'axios';
import Movie from '../models/Movie';

const baseUrl: string = `http://www.omdbapi.com/?apikey=cc496d57`;

var moks: Movie[] = [];
// ;[
//   {
//     Title: 'Better Start Running',
//     Year: '2018',
//     imdbID: 'tt27626622',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTkyOTA1Mzg0M15BMl5BanBnXkFtZTgwMzcyNTM0NjM@._V1_SX300.jpg',
//   },
//   {
//     Title: 'I Start Counting',
//     Year: '1969',
//     imdbID: 'tt00644622',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BZWIyZGZjNmQtZGFhNS00NGUxLWExNzEtYzViNGUwN2E4MjNlXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Start-Up',
//     Year: '2019',
//     imdbID: 'tt114541702',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BOTI1YjUwZmMtYTRmZS00MmNiLWFiZjEtYTcwMmVjNzQ5NWE5XkEyXkFqcGdeQXVyMjU0ODQ5NTA@._V1_SX300.jpg',
//   },
// ];

export const searchMovies = async (input: string): Promise<Movie[]> => {
  let url = baseUrl + '&s={' + input.trim() + '}&page=1';

  var movies = await axios.get(url);
  let {data} = movies;

  return data.Search;
};
