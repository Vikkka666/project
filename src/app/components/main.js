"use client"; 
import React, { useEffect, useState } from 'react';

export default function Main() {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://flowershop/api/products');
        if (!response.ok) {
          throw new Error('Ошибка при получении данных');
        }
        const data = await response.json();
        setPosts(data); 
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div className='flex justify-around w-full flex-wrap'>
      {posts.map((post) => (
        <div key={post.id} className='w-[200px] m-[50px] bg-[#f2f2f2] p-[20px] rounded-lg'>
          <h2 className='text-lg font-bold mb-[10px]'> {post.name}</h2> 
            
        <img src={post.images} className='w-[200px] rounded-lg'/>
        <br />
        {post.price} руб.
        </div>
      ))}
    </div>
  );
}