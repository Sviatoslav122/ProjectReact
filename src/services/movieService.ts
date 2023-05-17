import axios from 'axios';

const API_KEY = 'dc198767019c130b419bd5a3dd84779e';
const API_URL = 'https://api.themoviedb.org/3';

const getMovies = async () => {
    try {
        const response = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
};

export default {
    getMovies,
};
