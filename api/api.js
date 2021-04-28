import axios from 'axios';

const PORT = process.env.PORT || 3001;

export default axios.create({
  baseURL: `https://murmuring-springs-63850.herokuapp.com/api`,
});
