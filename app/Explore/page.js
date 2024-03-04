"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Explor = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/");
    setData(response.data);
    console.log(data)
  };

  useEffect(() => {
    

    getData();
  }, []);

  return (
    <div>
      Hello, it is Explore!
      <button onClick={getData} className='m-5 p-3 bg-white text-black rounded-lg'>Get Data</button>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );  
};

export default Explor;

