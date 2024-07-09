import axios from 'axios';

const ACCESS_KEY = 'r1bv0cGSOPN9yma5sswCw-JahRtAD_RuqGm3j75US3w';
axios.defaults.baseURL = 'https://api.unsplash.com/';
// https://unsplash.com/developers 
// axios.defaults.headers.common['Authorization'] = ACCESS_KEY;


export default async function getImages(searchImage, page) {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: searchImage,
      page,
      per_page: 12,
    },
  });
  // console.log('response >> ', response);
  return response.data;
  
}