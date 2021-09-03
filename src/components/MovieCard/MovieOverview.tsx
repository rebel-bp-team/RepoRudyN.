import React from 'react';
import {Image, TouchableWithoutFeedback, View, Text} from 'react-native';
import Movie from '../../models/Movie';
import styles from './styles';
import {removeItem, setItem} from '../../services/AsyncStorage';

const MovieOverview = ({
  movie,
  isFavorite,
  onItemPress,
}: {
  movie: Movie;
  isFavorite: boolean;
  onItemPress?: any;
}) => {
  const onMoviePress = async () => {
    if (isFavorite == false) {
      await setItem(movie.imdbID, JSON.stringify(movie));
    } else {
      await removeItem(movie.imdbID);
    }
    if (onItemPress) {
      await onItemPress();
    }
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={onMoviePress}>
        <Image style={styles.logo} source={{uri: movie.Poster}} />
      </TouchableWithoutFeedback>
      <Text style={styles.text}>{movie.Title}</Text>
    </View>
  );
};

export default MovieOverview;
