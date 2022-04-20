import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../../../utils/mutations';
import UploadForm from '../uploadFile/uploadFile';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../../utils/queries';

function PostItem() {
  const [postForm, setPostForm] = useState('');
  const { data: categoryData } = useQuery(QUERY_CATEGORIES);
  const [addItem] = useMutation(ADD_ITEM);

  console.log(categoryData);

  // Category id values depend on object id created when categories are seeded in mongo database
  // if you reseed your database you need to come here and change these values if not you'll have the wrong id when it posts to the server

  let itemImage = localStorage.getItem('imageurl');
  let userId = localStorage.getItem('userId');
  if (itemImage) {
    itemImage = itemImage.replace(/^"(.*)"$/, '$1');
  }
  if (userId) {
    userId = userId.replace(/^"(.*)"$/, '$1');
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addItem({
      variables: {
        title: postForm.itemTitle,
        description: postForm.description,
        image: itemImage,
        price: parseInt(postForm.price),
        quantity: parseInt(postForm.Quantity),
        category: postForm.categoryId,
        user: userId
      }
    });
    console.info(mutationResponse);
    localStorage.removeItem('imageurl');
  };

  const handleChange = (event) => {
    // console.log(event.target.value)
    const { name, value } = event.target;
    setPostForm({
      ...postForm,
      [name]: value
    });
  };

  const renderCategoryOptions = () => {
    return     categoryData.categories.map((category) => 
       (
        <option value={category._id} key={category._id}>
          {category.name + ' - ' + category._id}
        </option>
      )
    )
  }

  return (
    <div className="itemContainer">
      <form onSubmit={handleFormSubmit} className="form-container">
        <UploadForm />

        <label htmlFor="itemTitle">Item Title</label>
        <input
          type="text"
          name="itemTitle"
          placeholder="Title"
          className="formField"
          onChange={handleChange}
        ></input>

        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          placeholder="Price of Item"
          className="formField"
          onChange={handleChange}
        ></input>

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="formField"
          onChange={handleChange}
        ></input>

        <label htmlFor="description">Quantity</label>
        <input
          type="Number"
          name="Quantity"
          placeholder="Quantity"
          className="formField"
          onChange={handleChange}
        ></input>

        <label htmlFor="categoryId">Category</label>
        <select name="categoryId" onChange={handleChange}  placeholder="Select a value">
          {' '}
          { categoryData ? renderCategoryOptions() : <div>xxxx</div>}
      
        </select>
        { postForm.categoryId === undefined ?  `You have not selected a category` : `You've sected the ${postForm.categoryId} category`}
        <button type="submit" className="btn-primary">
          Hawk Item
        </button>
      </form>
    </div>
  );
}

export default PostItem;
