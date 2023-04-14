import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ProductDetail = (props) => {
    const {id} = useParams()
    const [product,setProduct] = useState([])
    useEffect(()=>{
        setProduct(props.products.find(product => product.id == id))
    },[props])
  return (
    <div>
        <h1>CHi tiết product</h1>
        <h2>Name: {product?.name}</h2>
        <h2>Price: {product?.price}</h2>
        <h2>cateId: {product?.cateId}</h2>
    </div>
  )
}

export default ProductDetail