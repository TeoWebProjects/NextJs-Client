import React from 'react'
import { Name, Price, Product, ProductImage, ContainerImage } from './ProductCard.style'
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
        <ContainerImage>
          <ProductImage src={`http://localhost:5000${image}`} />
        </ContainerImage>
      </Link>
      <Name>{name}</Name>
      <Price>{price}€</Price>
    </Product>
  )
}

export default ProductCard
