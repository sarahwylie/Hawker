import React from 'react';

import Auth from '../../../utils/auth';


function PostItem() {
  
  return <div>
    <div> 
       <form>
       <label for="itemImage">Insert Image </label>  
       <input type="file" name="itemImage"></input>

       <label for="itemTitle">Item Title</label>
       <input type="text" name="itemTitle"placeholder="Title"></input>

       <label for="price">Price</label>
       <input type="text" name="price" placeholder="Price of Item"></input>

       <label for="description">Description</label>
       <input type="text" name="description" placeholder="Description"></input>

       <input type="submit" value="List Item"></input>

       </form>  
    </div>  
  </div>
}

export default PostItem;
