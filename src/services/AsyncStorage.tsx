import AsyncStorage from '@react-native-community/async-storage';

export const setItem = async (key: string, item: string) => {
  try {
    await AsyncStorage.setItem(key, item);
  } catch (error) {
    console.log('Unable to get', key);
  }
};

export const getItem = async (key: string): Promise<string> => {
  let item: string;
  try {
    item = await AsyncStorage.getItem(key);
  } catch (error) {
    console.log('Unable to get', key);
  }
  return item;
};

export const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    console.log('Unable to get keys');
  }
  return keys;
};

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Unable to remove', key);
  }
};
