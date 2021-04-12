import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSearchItems } from '../../redux/actions/search.reducer';

import Products from '../../components/Products';
import './items.scss';

const Items = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const moviesData = useSelector((state) => state.searchItems.itemsList);

  useEffect(() => {
    const query = location.search;
    const searchItems = async () => {
      const { status, resp } = await dispatch(fetchSearchItems(query));
      if (status === 'error') alert('There was an error fetching the items', resp);
    };

    searchItems();
  }, [dispatch, location.search]);

  const handleOpenProduct = (id) => {
    history.push(`/items/${id}`);
  };

  return (
    <>
      <p className="items-breadcum">Breadcum</p>
      <div className="items-container">
        {moviesData.map((item) => (
          <Products key={item.id} product={item} openProduct={handleOpenProduct} />
        ))}
      </div>
    </>
  );
};

export default Items;
