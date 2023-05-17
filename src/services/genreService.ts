import axios from 'axios';

const API_KEY = 'dc198767019c130b419bd5a3dd84779e';
const API_URL = 'https://api.themoviedb.org/3';

const getGenres = async () => {
    try {
        const response = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
        return response.data.genres;
    } catch (error) {
        console.error('Error fetching genres:', error);
        return [];
    }
};

export default {
    getGenres,
};
