import React from 'react'
import "../Styles/Card.scss"
import { Link } from 'react-router-dom'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`} >
    <div className='card'>
        <div className="images">
            {item?.attributes.isNew && <span>New Season</span>}
            <img src={
              process.env.REACT_APP_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url} alt="" className="mainImage" />
            <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes?.img2?.data?.attributes?.url} alt="" className="secondImage" />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
            <h3><CurrencyRupeeIcon className='icon'/>{item.oldPrice || item?.attributes.price+299 }</h3>
            <h3><CurrencyRupeeIcon className='icon'/>{item?.attributes.price}</h3>
        </div>
    </div>
    </Link>
  )
}

export default Card