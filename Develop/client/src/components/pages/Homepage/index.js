import React, { useState, useEffect } from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../../utils/queries';
import { QUERY_CATEGORIES } from '../../../utils/queries';

function Homepage() {
  const { data: itemData } = useQuery(QUERY_ITEMS);
  const { data: categoryData } = useQuery(QUERY_CATEGORIES);
  const [categories, setCategories] = useState();


  // issue is here, can log filteredCat but can't drill down to
  // the category
  const filterCategory = (event) => {
    setCategories(event.target.getAttribute('name'));
    console.log(itemData.items);
    console.log(categories);
    let filteredCat = itemData.items.filter((category) => {
      return itemData.items.includes(category);
    });
    console.log(filteredCat);
  };

  const getCategoryData = () => {
    return (
      <ul className="cats" id="catBtn">
        {categoryData.categories.map((category) => (
          <li key={category._id} name={category.name} onClick={filterCategory}>
            {category.name}
          </li>
        ))}
      </ul>
    );
  };

  function showDiv() {
    if (document.getElementById('catBtn').style.display === '') {
      document.getElementById('catBtn').style.display = 'block';
    } else {
      document.getElementById('catBtn').style.display = '';
    }
  }

  // getting item data from the database and mapping to the ui
  const getItemData = () => {
    return itemData.items.map((item) => (
      <CCard key={item._id}>
        <CCardImage orientation="top" src={item.image} alt={item.title} width="100%" />
        <CCardBody>
          <CCardTitle>{item.title}</CCardTitle>
          <CCardText>${item.price}</CCardText>
          <CCardText>{item.category.name}</CCardText>
          <Link to={`/SingleItem/${item._id}`}>
            {' '}
            <CButton>See Item</CButton>
          </Link>
        </CCardBody>
      </CCard>
    ));
  };
  return (
    <div className="itemContainer">
      <button className="btn-primary" onClick={showDiv}>
        Categories
      </button>
      <div className="itemContainer">
        {categoryData ? getCategoryData() : <div>Loading...</div>}
      </div>
      {itemData ? getItemData() : <div>Loading...</div>}
    </div>
  );
}

export default Homepage;
