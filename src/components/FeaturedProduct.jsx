import "../Styles/FeaturedProduct.scss"
import Card from './Card'
import useFetch from '../hooks/useFetch'

const FeaturedProduct = ({type}) => {

  const {data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  )

  return (
    <div className='featuredProducts'>
       <div className="top">
        <h1>{type} product</h1>
        <p>Embrace the future of online shopping with Ecommerce Express. Discover an unrivaled selection of products, personalized recommendations, secure transactions, and exceptional customer service—all in one platform. Start your shopping journey today and experience the ultimate convenience, reliability, and joy of Ecommerce Express.</p>

       </div>
       <div className="bottom">
        { error ? "something went wrong" : loading ? "loading" :
          data?.map(item=>(
          <Card item={item} key={item.id}/>
        ))}
       </div>
    </div>
  )
}

export default FeaturedProduct