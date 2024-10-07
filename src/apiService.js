import axios from 'axios';

const API_URL = 'https://api.spotify.com/v1';

export const getSongs = async () => {
  const response = await axios.get(`${API_URL}/songs`);
  return response.data;
};

export const createSong = async (song) => {
  const response = await axios.post(`${API_URL}/songs`, song);
  return response.data;
};

export const updateSong = async (id, song) => {
  const response = await axios.put(`${API_URL}/songs/${id}`, song);
  return response.data;
};

export const deleteSong = async (id) => {
  const response = await axios.delete(`${API_URL}/songs/${id}`);
  return response.data;
};
