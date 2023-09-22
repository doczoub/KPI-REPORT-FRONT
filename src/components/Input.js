import React from 'react'
import { useState } from 'react';

const Input = ({values,values2}) => {
    const [value, setValue] = useState(0);

    const handleaddNumber = (e) => {
        setValue(e.target.value);
      };

    const addNum = (val, val2) => {
      let a = parseInt(val);
      let b = parseInt(val2);
      setValue(Math.trunc((b / a)*100));
    };

    const buttonClick= (e) =>{ 
    e.preventDefault()
     addNum(values,values2)
    };
  return (
    <div>
    <button onClick={buttonClick}>
      Result
    </button>
    <input 
    onChange={(e)=>handleaddNumber}
    value= {value > 0 ? value : ""}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required />
    </div>
  )
}

export default Input
