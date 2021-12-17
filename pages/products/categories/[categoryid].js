import React from 'react'
import { useRouter } from 'next/router'
import Theme from '../../../Theme'
import { Container } from './CategoryProductsPage.style'
import ProductList from '../../../components/ProductsList/ProductList'

const CategoryProducts = ({ products }) => {
  const router = useRouter()
  const { categoryid } = router.query
  return (
    <Theme>
      <Container>{products.message ? <h1>No Products</h1> : <ProductList products={products} />}</Container>

      {console.log(products)}
    </Theme>
  )
}

export default CategoryProducts

// This gets called on every request
export async function getServerSideProps(context) {
  const { categoryid } = context.query
  // Fetch data from external API
  const res = await fetch(`http://localhost:5000/api/products/categories/${categoryid}`)
  const products = await res.json()

  // Pass data to the page via props
  return { props: { products } }
}
