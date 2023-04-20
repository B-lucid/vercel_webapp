
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";


const CelebritySlider = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    autoplay: true,
    arrows:true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
responsive: [
{
  breakpoint: 1366,
  settings: {
    slidesToShow: 4,
    slidesToScroll: 4,
  },
},
{
  breakpoint: 1200,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 1,
  },
},
{
  breakpoint: 991,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 1,
  },
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 1,
  },
},
{
  breakpoint: 400,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 1,
  },
},
],
  };
const data =[
  {
  id:1,
  img:"https://www.onthisday.com/images/people/robert-downey-jr-medium.jpg",
  },
  {
  id:2,
  img:"https://www.mrdustbin.com/us/wp-content/uploads/2021/11/Tom-Holland.jpg",
  },
  {
  id:3,
  img:"https://assets.gqindia.com/photos/5d036865eaf24ad60854d872/4:3/w_1440,h_1080,c_limit/Chris-Hemsworth.jpg",
  },
  {
  id:4,
  img:"https://wl-brightside.cf.tsp.li/resize/728x/jpg/a0e/0fb/39a3e656e8879888e6fd7fa5eb.jpg",
  },
  {
    id:5,
    img:"https://www.onthisday.com/images/people/robert-downey-jr-medium.jpg",
    }
]
  return (
    <div className="celebrity-container">
     <div className="title3">
      <h2 className="title-inner3">Celebrities</h2>
      <div className="line"></div>
      </div>
     <div className="celebrity-slider">
     <Slider {...settings} className="slide-1 home-slider">
    {data.map(item=>(
         
      <div key={item.id} className="image-cont"  >
         <img  src={item.img} alt="celebs"/>
         <h4>abcde abcxyz</h4>
      </div>
    ))}
       </Slider>
    <h3 ><Link href="#">View More</Link></h3>
   </div>
    </div>
  );
};

export default CelebritySlider;

// import React from 'react'

// const CelebritySlider = () => {
//   return (
//     <div>CelebritySlider</div>
//   )
// }

// export default CelebritySlider