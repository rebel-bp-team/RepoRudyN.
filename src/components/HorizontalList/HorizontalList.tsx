import React from 'react';
import {FlatList, ListRenderItem, Text, View} from 'react-native';
import Movie from '../../models/Movie';
import MovieOverview from '../MovieCard/MovieOverview';
import styles from './styles';

const HorizontalList = ({
  items,
  isFavorite = false,
  onItemPress,
  emptyListText,
}: {
  items: Movie[];
  isFavorite?: boolean;
  emptyListText: string;
  onItemPress?: any;
}) => {
  const renderItem: ListRenderItem<Movie> = movie => {
    return (
      <MovieOverview
        movie={movie.item}
        isFavorite={isFavorite}
        onItemPress={onItemPress}
      />
    );
  };

  return (
    <>
      {items && items.length > 0 ? (
        <>
          <FlatList
            horizontal
            data={items}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
            keyExtractor={item => item.imdbID}
          />
        </>
      ) : (
        <View style={styles.emptyList}>
          <Text style={styles.emptyListText}>{emptyListText}</Text>
        </View>
      )}
    </>
  );
};

export default HorizontalList;
