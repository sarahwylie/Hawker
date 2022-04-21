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

  console.info(categoryData);

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
    window.location.assign('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostForm({
      ...postForm,
      [name]: value
    });
  };

  const renderCategoryOptions = () => {
    return categoryData.categories.map((category) => (
      <option value={category._id} key={category._id} name={category.name}>
        {category.name}
      </option>
    ));
  };

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
        <select name="categoryId" onChange={handleChange} defaultValue={'none'}>
          <option value="none" disabled hidden>
            Select An Option
          </option>
          {categoryData ? renderCategoryOptions() : <option>Loading...</option>}
        </select>
        {postForm.categoryId === undefined
          ? `You have not selected a category`
          : `You've selected a category`}
        <button type="submit" className="btn-primary">
          Hawk Item
        </button>
      </form>
    </div>
  );
}

export default PostItem;
