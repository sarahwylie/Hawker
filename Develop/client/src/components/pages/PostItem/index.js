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
    { name: 'Outdoor', id: '6258c2c3fcaaf30e4ffa9ba0' },
    { name: 'Transportation', id: '6258c2c3fcaaf30e4ffa9ba1' },
    { name: 'Tech', id: '6258c2c3fcaaf30e4ffa9ba2' },
    { name: 'Sports', id: '6258c2c3fcaaf30e4ffa9ba3' }
  ];

  const handleFormSubmit = async (event) => {
    event.preventDefault();
   console.log(postForm)
    const mutationResponse = await addItem({
      variables: {
        'title': postForm.itemTitle,
        'description': postForm.description,
        'image': postForm.itemImage,
        'price': parseInt(postForm.price),
        'quantity': parseInt(postForm.Quantity),
        'category': postForm.categoryId

      }
    });
    console.info(mutationResponse)
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
    <div>
      <h4> Add Your Listing </h4>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="itemImage">Insert Image </label>
        <input type="file" name="itemImage" onChange={handleChange}></input>

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

        <label htmlFor="categoryId">Quantity</label>
       <select  name='categoryId' onChange={handleChange}> {categories.map((category) => { return <option  value={category.id} key={category.id}>{category.name + ' - ' +  category.id}</option>})}</select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostItem;
