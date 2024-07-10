import axios from "axios";

const ACCESS_KEY = "r1bv0cGSOPN9yma5sswCw-JahRtAD_RuqGm3j75US3w";
axios.defaults.baseURL = "https://api.unsplash.com/";

export default async function getImages(searchImage: string, page: number) {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: searchImage,
      page,
      per_page: 12,
    },
  });
  return response.data;
}
