import React, { useState } from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "../Styles/Slider.scss"

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/3761270/pexels-photo-3761270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=2500&dpr=2",
        "https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=3000&dpr=2",
        "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=2500",
      ];

const prevSlide = ()=>{
    setCurrentSlide(currentSlide===0 ? 2 : (prev)=>prev-1);
}
const nextSlide = ()=>{
    setCurrentSlide(currentSlide===2 ? 0 : (prev)=>prev+1);
}
  return (
    <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            <img src={data[0]} alt='fashion' />
            <img src={data[1]} alt='fashion' />
            <img src={data[2]} alt='fashion' />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlinedIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider