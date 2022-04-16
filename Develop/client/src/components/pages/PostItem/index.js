import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../../../utils/mutations';

function PostItem() {
  const [postForm, setPostForm] = useState('');
  // const[category, setCategory] = useState('');
  const [addItem] = useMutation(ADD_ITEM);

  // Category id values depend on object id created when categories are seeded in mongo database
  // if you reseed your database you need to come here and change these values if not you'll have the wrong id when it posts to the server
  const categories = [
    { name: 'Outdoor', id: '6259e3f5544d46b76947b812' },
    { name: 'Auto', id: '6259e3f5544d46b76947b813' },
    { name: 'Tech', id: '6259e3f5544d46b76947b814' },
    { name: 'Clothing', id: '6259e3f5544d46b76947b815' },
    { name: 'Home', id: '6259e3f5544d46b76947b816' }
  ];

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(postForm);
    const mutationResponse = await addItem({
      variables: {
        title: postForm.itemTitle,
        description: postForm.description,
        image: postForm.itemImage,
        price: parseInt(postForm.price),
        quantity: parseInt(postForm.Quantity),
        category: postForm.categoryId
      }
    });
    console.info(mutationResponse);
  };

  const handleChange = (event) => {
    // console.log(event.target.value)
    const { name, value } = event.target;
    setPostForm({
      ...postForm,
      [name]: value
    });
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="itemImage">Insert Image </label>
        <input type="file" name="itemImage" onChange={handleChange} className="btn-primary"></input>

        <label htmlFor="itemTitle">Item Title</label>
        <input type="text" name="itemTitle" placeholder="Title" onChange={handleChange}></input>

        <label htmlFor="price">Price</label>
        <input type="text" name="price" placeholder="Price of Item" onChange={handleChange}></input>

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        ></input>

        <label htmlFor="description">Quantity</label>
        <input type="Number" name="Quantity" placeholder="Quantity" onChange={handleChange}></input>

        <label htmlFor="categoryId">Category</label>
        <select name="categoryId" onChange={handleChange}>
          {' '}
          {categories.map((category) => {
            return (
              <option value={category.id} key={category.id}>
                {category.name + ' - ' + category.id}
              </option>
            );
          })}
        </select>
        <button type="submit" className="btn-primary">
          Hawk Item
        </button>
      </form>
    </div>
  );
}

export default PostItem;
