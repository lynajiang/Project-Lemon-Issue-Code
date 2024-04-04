import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8000/polls';
export const refreshAccessToken = async () => {
    try {
      const refresh = await AsyncStorage.getItem('access_token');

      const response = await fetch(`http://127.0.0.1:8000/polls/token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          username: username,
          password: logPassword,
        }),
      });

      if (response.ok) {
        const newAccessToken = response.data.access;
        saveToken('access_token', newAccessToken);
      }

    } catch (error) {
      console.error(error.message);
      alert('Error occurred during refreshing access token', error);
  };
}

export const retrieveUsername = async () => {
    try {
      const token = await getToken();
      const username = token['name'];
      return username;
    } catch (error) {
      console.error('Error retrieving username from token', error);
    }
  };

export const saveToken = async (typeToken, token) => {
    try {
      await AsyncStorage.removeItem(typeToken);
      await AsyncStorage.setItem(typeToken, token);
    } catch (error) {
      console.error('Error saving ${typeToken} to AsyncStorage:', error);
    }
};

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('access_token');
        return token;
    } catch (error) {
        console.error('Error getting token:', error);
        return null;
    }
}

export const debugAsyncStorage = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
  
      console.log('AsyncStorage Keys:', keys);
      console.log('AsyncStorage Items:', items);
    } catch (error) {
      console.error('Error reading AsyncStorage:', error);
    }
};

export const makeApiRequest = async (endpoint, method = 'GET', data = null, headers = {}) => {
    const url = `${BASE_URL}/${endpoint}`;
    try {
      const response = await axios({
        method,
        url,
        data,
        headers,
      });
  
      return response;
    } catch (error) {
      console.error(`API request to ${url} failed:`, error);
      throw error;
    }
  };

export const jsonHeaders = {
  'Content-Type': 'application/json',
};

export const getJsonTokenHeaders = async () => {
  const token = await getToken();

  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
};

export const formDataHeaders = async () => {
  const token = await getToken();

  return {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${token}`,
  };
};