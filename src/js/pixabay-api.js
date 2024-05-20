import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43873427-52524e51f424820d3ed845203';
const params = `?key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true`;

export async function fetchImg(searchquery) {
    const response = await axios.get(`${BASE_URL}${params}&q=${searchquery}`)
        return response.data;
};
