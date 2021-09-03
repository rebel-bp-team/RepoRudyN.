import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import Movie from '../../models/Movie';
import styles from './styles';
import {getAllKeys, getItem} from '../../services/AsyncStorage';
import HorizontalList from '../../components/HorizontalList/HorizontalList';
import {SearchBar} from 'react-native-elements';
import {searchMovies} from './../../services/MovieService';

const initialList: Movie[] = [];

const MovieList = () => {
  const [favoriteMovies, setFavoriteMovies] = useState(initialList);
  const [movies, setMovies] = useState(undefined);
  const [search, setSearch] = useState('');

  useEffect(() => {
    refreshFavorites();
  }, []);

  useEffect(() => {
    const updateSearchMovies = async () => {
      let movieList = await searchMovies(search);
      setMovies(movieList);
    };

    updateSearchMovies();
  }, [search]);

  const onMoviesSearch = (input: string) => {
    setSearch(input);
  };

  const refreshFavorites = async () => {
    let favMovies: Movie[] = [];
    let keys = await getAllKeys();

    // todo use the multi get from AsyncStorage
    keys.forEach(async key => {
      let favoriteMovie = await getItem(key);

      if (favoriteMovie) {
        let newFavorite: Movie = JSON.parse(favoriteMovie);
        favMovies.push(newFavorite);
      }
    });
    setTimeout(() => {
      setFavoriteMovies(favMovies);
    }, 1000);
  };

  return (
    <>
      <SearchBar
        placeholder="Search movie..."
        onChangeText={onMoviesSearch}
        value={search}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Searched Movies</Text>
          <HorizontalList
            items={movies}
            emptyListText={'Nothing to search for.'}
            onItemPress={refreshFavorites}></HorizontalList>
          <Text style={styles.noteText}>
            *Tap on the movie poster to add it to favorites
          </Text>
        </View>
        <View>
          <Text style={styles.text}>Favorites</Text>
          <HorizontalList
            isFavorite={true}
            items={favoriteMovies}
            emptyListText={
              'No movie added to favorites. Select movies from search list to add them to favories.'
            }
            onItemPress={refreshFavorites}></HorizontalList>
          <Text style={styles.noteText}>
            *Tap on the movie poster to remove it from favorites
          </Text>
        </View>
      </View>
    </>
  );
};

export default MovieList;
