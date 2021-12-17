import { useContext } from 'react'
import { AddToCartButton } from './ProductPage.style'
import Theme from '../../Theme'
import CartContext from '../../Contexts/CartContext/cart-context'

const ProductPage = ({ product }) => {
  // const router = useRouter()
  // const { productid } = router.query
  const { addToCart } = useContext(CartContext)

  const handleClick = (e) => {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <Theme>
      <div>{product.message ? <h1>No Products</h1> : <h1>{product.name}</h1>}</div>
      <AddToCartButton onClick={handleClick}>Add To Cart</AddToCartButton>
    </Theme>
  )
}

export default ProductPage

// This gets called on every request
export async function getServerSideProps(context) {
  const { productid } = context.query
  // Fetch data from external API
  const res = await fetch(`http://localhost:5000/api/products/${productid}`)
  const product = await res.json()

  // Pass data to the page via props
  return { props: { product } }
}
