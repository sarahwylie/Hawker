import React, { useState } from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../../utils/queries';
import { QUERY_CATEGORIES } from '../../../utils/queries';

function Homepage() {
  const { data: itemData } = useQuery(QUERY_ITEMS);
  const { data: categoryData } = useQuery(QUERY_CATEGORIES);
  const [categories, setCategories] = useState();
  console.info(itemData);

  // getting item data from the database and mapping to the ui
  const getItemData = () => {
    return itemData.items.map((item) => (
      <CCard key={item._id}>
        <CCardImage orientation="top" src={item.image} alt={item.title} width="100%" />
        <CCardBody>
          <CCardTitle>{item.title}</CCardTitle>
          <CCardText>${item.price}</CCardText>
          <Link to={{ pathname: `/SingleItem/${item._id}`, item: item }}>
            {' '}
            <CButton>See Item</CButton>
          </Link>
        </CCardBody>
      </CCard>
    ));
  };

  const setState = (e) => {
    setCategories(e.target.innerText);
  };

  const filterCategory = () => {
    const newArr = itemData.items.filter((e) => e.category.name === categories);

    return newArr.map((filteredItem) => (
      <div key={filteredItem._id}>
        <CCard>
          <CCardImage
            orientation="top"
            src={filteredItem.image}
            alt={filteredItem.title}
            width="100%"
          />
          <CCardBody>
            <CCardTitle>{filteredItem.title}</CCardTitle>
            <CCardText>${filteredItem.price}</CCardText>
            <Link to={`/SingleItem/${filteredItem._id}`}>
              {' '}
              <CButton>See Item</CButton>
            </Link>
          </CCardBody>
        </CCard>
      </div>
    ));
  };

  const getCategoryData = () => {
    return (
      <ul className="cats" id="catBtn">
        {categoryData.categories.map((category) => (
          <div key={category._id} name={category.name} onClick={setState}>
            {category.name}
          </div>
        ))}
      </ul>
    );
  };

  const showDiv = () => {
    if (document.getElementById('catBtn').style.display === '') {
      document.getElementById('catBtn').style.display = 'block';
    } else {
      document.getElementById('catBtn').style.display = '';
    }
  };

  const renderCards = () => {
    if (itemData && categories === undefined) {
      return getItemData();
    } else if (categories !== undefined) {
      return filterCategory();
    }
  };

  return (
    <div className="itemContainer">
      <button className="btn-primary" onClick={showDiv}>
        Categories
      </button>
      <div className="itemContainer">
        {categoryData ? getCategoryData() : <div>Loading...</div>}
      </div>
      {itemData ? renderCards() : <div>Loading...</div>}
    </div>
  );
}

export default Homepage;
