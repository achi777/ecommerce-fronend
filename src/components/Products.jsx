import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Products() {
  const location = useLocation()
  const segments = location.pathname.split('/')
  const catID = segments[2]

  const [products, setProducts] = useState([])

  useEffect(() => {
    const API_URL = `http://localhost/api/category/${catID}/products`

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
  }, [catID])

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product) => (
              <div className="col mb-5" key={product.id}>
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{product.name}</h5>
                      {product.price}
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <Link to={`/productDetails/${product.id}`}>
                        View details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
