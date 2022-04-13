import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../../../utils/mutations';
import Auth from '../../../utils/auth';

function PostItem() {
  const [postForm, setPostForm] = useState('');
  const [addPost] = useMutation(ADD_ITEM);

  const categories = [
    { name: 'Outdoor', id: '6256096b98fc0602b12202fb' },
    { name: 'Transportation', id: '6256096b98fc0602b12202fc' },
    { name: 'Tech', id: '6256096b98fc0602b12202fd' },
    { name: 'Sports', id: '6256096b98fc0602b12202fe' }
  ];

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addPost({
      variables: {
        title: postForm.title,
        description: postForm.description,
        image: postForm.image,
        price: postForm.price,
        quanity: postForm.quanity,
        category: postForm.catergory
      }
    });
    const token = mutationResponse.data.addPost.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostForm({
      ...postForm,
      [name]: value
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label for="itemImage">Insert Image </label>
        <input type="file" name="itemImage" onChange={handleChange}></input>

        <label for="itemTitle">Item Title</label>
        <input type="text" name="itemTitle" placeholder="Title" onChange={handleChange}></input>

        <label for="price">Price</label>
        <input type="text" name="price" placeholder="Price of Item" onChange={handleChange}></input>

        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        ></input>

        <label for="description">Quantity</label>
        <input type="Number" name="Quantity" placeholder="Quantity" onChange={handleChange}></input>
        
       <select> {categories.map((category) => { return <option>{category.name + ' - ' +  category.id}</option>})}</select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostItem;
