import axios from 'axios';

const { CLIENT_ID, CLIENT_SECRET } = process.env;

export const axiosClient = axios.create({
  baseURL: 'https://api.github.com/',
  params: {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  },
});
