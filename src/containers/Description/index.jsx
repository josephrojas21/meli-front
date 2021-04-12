import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDescriptionItem } from '../../redux/actions/description.reducer';

import InfoItem from '../../components/InfoItem';
import Breadcum from '../../components/Breadcum';
import './description.scss';

const Description = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.descriptionItem.infoItem);
  const breadcum = useSelector((state) => state.searchItems.breadcum);

  useEffect(() => {
    const id = location.pathname.split('/').pop();
    const searchItems = async () => {
      const { status, resp } = await dispatch(fetchDescriptionItem(id));
      // eslint-disable-next-line no-alert
      if (status === 'error') alert('There was an error fetching the item description', resp);
    };

    searchItems();
  }, [dispatch, location.pathname]);

  return (
    <>
      <Breadcum text={breadcum} />
      <div className="item-container">
        {info.id && <InfoItem info={info} />}
      </div>
    </>
  );
};

export default Description;
