import axios from '../../utils/apiClient';

const reqDescriptionItem = async (id) => {
  const [error, data] = await axios.get(`${id}`)
    .then((item) => [null, item.data])
    .catch((err) => [err, err]);

  return [error, data];
};

export default reqDescriptionItem;
