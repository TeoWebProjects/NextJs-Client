import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Products, Title } from './ProductList.style'

const ProductList = ({ products }) => {
  return (
    <>
      {console.log(products)}
      <Title>{products[0].category}</Title>
      {products ? (
        <Products>
          {products.map((product) => (
            <ProductCard
              name={product.name}
              image={product.image}
              price={product.price}
              id={product._id}
              key={product._id}
            />
          ))}
        </Products>
      ) : (
        <h1>No Products</h1>
      )}
    </>
  )
}

export default ProductList
