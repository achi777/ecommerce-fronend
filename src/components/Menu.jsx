import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    fetch('http://localhost/api/categories')
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Simple Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="." end>
                  Home
                </NavLink>
              </li>
              {cats.map((cat) => (
                <li className="nav-item" key={cat.id}>
                  <NavLink className="nav-link" to={`/products/${cat.id}`}>
                    {cat.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1" />
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Menu
