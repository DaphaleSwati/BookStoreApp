// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import list from '../../public/list.json';
import Cards from './cards';

function FreeBook() {
  //filter data from json file
  const filterData = list.filter((data)=>data.category==="free");
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
        {filterData.map((item) => (
  <Cards item={item} key={item.id} />
))}
    </Slider>
     </div>
    </div>
    </>
  )
}

export default FreeBook;