// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from "react-router-dom";
import list from "../../public/list.json";
import Cards from './Cards';

function Course() {
    // console.log(list);
  return (
    <>
        <div className='max-w-screen-2xl container-auto md:px-20 px-4t'>
           <div className='mt-28 item-center justify-center text-center'>
                <h1 className='text-2xl  md:text-4xl '> We are delighted to have you <span className='text-pink-500'>here! :)</span></h1>
                <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptatem fugiat repellendus quibusdam saepe doloribus qui? Sint temporibus, facilis possimus, voluptatem ad natus, repellat aut dicta molestiae tempora provident expedita?</p>
                <Link to="/">
                    <button className='bg-pink-500 text-white mt-6 px-4 py-2 rounded-md hover:bg-700 duration-300' >Back</button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    list.map((item)=>{
                        return <Cards key={item.id} item={item}/>
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Course