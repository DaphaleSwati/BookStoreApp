/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function Cards({item}) {
    console.log(item);
  return (
    <>
        <div className='mt-4 my-3 p-3 '>
        <div className="dark:bg-slate-900 dark:text-white card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:border">
  <figure>
    <img
      // eslint-disable-next-line react/prop-types
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="rounded-full border-[2px] cursor-pointer px-2 py-1 hover:bg-pink-500 hover:text-white px-2 py-1 duration-200">Buy Now</div>
    </div>
  </div>
</div>
        </div>
    </>
  )
}

export default Cards;