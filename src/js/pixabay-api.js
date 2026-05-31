import axios from 'axios';

const API_KEY = '55943354-aedacad3df1b2c8419ab26500';
const BASE_URL = 'https://pixabay.com/api/';

const getImagesByQuery = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });

  return response.data;
};

export { getImagesByQuery };
