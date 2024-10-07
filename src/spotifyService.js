import axios from 'axios';

const CLIENT_ID = 'd996e04d5cf647a88ead5b5de8ff1629';
const CLIENT_SECRET = '53e9c26beb1a4c02ad2264b3976d280b';
const REDIRECT_URI = 'http://localhost:3000/callback';
const AUTH_URL = 'https://accounts.spotify.com/authorize';
const TOKEN_URL = 'https://accounts.spotify.com/api/token';

export const getAuthUrl = () => {
  return `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=user-library-read user-library-modify`;
};

export const getToken = async (code) => {
  const response = await axios.post(TOKEN_URL, {
    grant_type: 'authorization_code',
    code,
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });
  return response.data.access_token;
};

export const getSongs = async (token) => {
  const response = await axios.get('https://api.spotify.com/v1/me/tracks', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.items;
};

export const createSong = async (token, song) => {
  const response = await axios.post('https://api.spotify.com/v1/me/tracks', song, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateSong = async (token, id, song) => {
  const response = await axios.put(`https://api.spotify.com/v1/me/tracks/${id}`, song, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteSong = async (token, id) => {
  const response = await axios.delete(`https://api.spotify.com/v1/me/tracks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
