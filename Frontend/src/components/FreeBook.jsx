// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import list from '../../public/list.json';
import axios from "axios";
import Cards from './cards';


function FreeBook() {
  //filter data from json file
  const [book,setBook]=useState([]);
    useEffect(
        ()=>{
            const getBook = async()=>{
                try{
                 const res = await axios.get("http://localhost:3001/book");
                 console.log(res);
                 setBook(res.data.filter((data)=>data.category==="free"));
                }catch(error){
                    console.log("Error: ",error);
                }
            }
            getBook();
        },[])
  // const filterData = list.filter((data)=>data.category==="free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  // console.log(filterData);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
      <h1 className='font-semibold text-xm pb-2'>Free Offred Courses</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde similique suscipit ab nam laborum corrupti expedita aliquid incidunt officia voluptatibus quibusdam nemo, facere dignissimos sit quis ipsa veritatis. Non, aperiam.</p>
      </div>
    
    <div>
    <Slider {...settings}>
        {/* //map the cards using filter data array /* */}
        {/* //first {list.map((item)  */}
        {book.map((item) => (
  <Cards item={item} key={item.id} />
))}
    </Slider>
     </div>
    </div>
    </>
  )
}

export default FreeBook;