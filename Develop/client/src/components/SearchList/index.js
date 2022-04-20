import React from 'react'
import data from '../pages/Homepage/imagesData.json';

function SearchList(props) {
        //create a new array by filtering the original array
        const filteredData = data.filter((el) => {
            //if no input the return the original
            // if (props.input === '') {
            //     return el;
            // }
            // //return the item which contains the user input
            // else {
            //     return el.text.toLowerCase().includes(props.input)
            // }
            return el;
        })
        // console.log(filteredData);
    return (
        <ul>
            {filteredData.map((item) => (
                <li  className="searchList" key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default SearchList