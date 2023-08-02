import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = "36591536-01f29463e86e1d04773412779";
const OPTIONS = "&image_type=photo&orientation=horizontal&per_page=12";

 export async function getImages(textValue, page) {
   const response = await axios.get(`${BASE_URL}?q=${textValue}&page=${page}&key=${API_KEY}${OPTIONS}`);
   return response
}