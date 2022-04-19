import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../../../utils/mutations';
import UploadForm from '../uploadFile/uploadFile';


function PostItem() {
  const [postForm, setPostForm] = useState('');
  // const[category, setCategory] = useState('');
  const [addItem] = useMutation(ADD_ITEM);
  
  // Category id values depend on object id created when categories are seeded in mongo database
  // if you reseed your database you need to come here and change these values if not you'll have the wrong id when it posts to the server
  const categories = [
    { name: 'Outdoor', id: '6259e6ff7b3e9cda212fed57' },
    { name: 'Auto', id: '6259e6ff7b3e9cda212fed58' },
    { name: 'Tech', id: '6259e6ff7b3e9cda212fed59' },
    { name: 'Clothing', id: '6259e6ff7b3e9cda212fed5a' },
    { name: 'Home', id: '6259e6ff7b3e9cda212fed5b' }
  ];

let itemImage = localStorage.getItem('imageurl')
let userId = localStorage.getItem('userId');
if(itemImage) {
  itemImage = itemImage.replace(/^"(.*)"$/, '$1');
}
if(userId) {
  userId = userId.replace(/^"(.*)"$/, '$1');
}

  const handleFormSubmit = async (event) => {
    event.preventDefault();
   console.log(postForm)
    const mutationResponse = await addItem({
      variables: {
        'title': postForm.itemTitle,
        'description': postForm.description,
        'image': itemImage,
        'price': parseInt(postForm.price),
        'quantity': parseInt(postForm.Quantity),
        'category': postForm.categoryId,
        'user': userId

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
    <div className='itemContainer'>
      <form onSubmit={handleFormSubmit} className="form-container">
        <UploadForm/>

        <label htmlFor="itemTitle">Item Title</label>
        <input type="text" name="itemTitle" placeholder="Title" className="formField" onChange={handleChange}></input>

        <label htmlFor="price">Price</label>
        <input type="text" name="price" placeholder="Price of Item" className="formField" onChange={handleChange}></input>

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="formField"
          onChange={handleChange}
        ></input>

        <label htmlFor="description">Quantity</label>
        <input type="Number" name="Quantity" placeholder="Quantity" className="formField" onChange={handleChange}></input>

        <label htmlFor="categoryId">Category</label>
       <select  name='categoryId' onChange={handleChange}> {categories.map((category) => { return <option  value={category.id} key={category.id}>{category.name + ' - ' +  category.id}</option>})}</select>
        <button type="submit" className='btn-primary'>Hawk Item</button>
      </form>
    </div>
  );
}

export default PostItem;
