import axios from '../../utils/apiClient';

const reqSearchItems = async (query) => {
  const [error, data] = await axios.get(`?q=${query}`)
    .then((items) => [null, items.data])
    .catch((err) => [err, err]);

  return [error, data];
};

export default reqSearchItems;
