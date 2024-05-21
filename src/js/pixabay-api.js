import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43873427-52524e51f424820d3ed845203';
const PER_PAGE = 15;

export async function fetchImg(searchquery, page) {
    const params = `?key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${PER_PAGE}`;
    const {data} = await axios.get(`${BASE_URL}${params}&q=${searchquery}`)
        return data;
};
