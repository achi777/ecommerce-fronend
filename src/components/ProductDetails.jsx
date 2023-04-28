import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ProductDetails() {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch('http://localhost/api/products/1')
      .then((response) => response.json())
      .then((data) => setProduct(data))
  }, [])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <Link to="/products" relative="path">
        Go back
      </Link>
    </div>
  )
}

export default ProductDetails
