import React from 'react'
import { Name, Price, Product, ProductImage } from './ProductCard.style'
import Link from 'next/link'

const ProductCard = ({ name, image, price, id }) => {
  return (
    <Product>
      <Link
        href={{
          pathname: '/products/[productid]',
          query: { productid: id },
        }}
      >
        <ProductImage src={image} />
      </Link>
      <Name>{name}</Name>
      <Price>{price}€</Price>
    </Product>
  )
}

export default ProductCard
