import { useContext, useState, useEffect } from 'react'
import {
  Container,
  SingleProduct,
  Left,
  Right,
  Image,
  Name,
  Description,
  Price,
  RegularPrice,
  DiscountPrice,
  CartButton,
  Availability,
  FullImageCon,
  FullImage,
  ExitImage,
  Wrap,
  SelectInput,
  InputOption,
  ContainerImage,
} from './ProductPage.style'
import Theme from '../../Theme'
import CartContext from '../../Contexts/CartContext/cart-context'

const ProductPage = ({ product }) => {
  const { addToCart, cart } = useContext(CartContext)
  const [showImage, setShowImage] = useState(false)
  const [counter, setCounter] = useState([])
  const [qty, setQty] = useState({})

  const handleClick = (e) => {
    e.preventDefault()
    product.qty = qty
    addToCart(product)
  }

  useEffect(() => {
    setCounter([])
    let counter = []
    for (let i = 0; i < product.countInStock; i++) {
      counter = [...counter, i + 1]
    }

    setCounter(counter)
    setQty({ current: 1, max: counter.length })
  }, [product.countInStock])

  return (
    <Theme>
      {/* <div>{product.message ? <h1>No Product</h1> : <h1>{product.name}</h1>}</div>
      <AddToCartButton onClick={handleClick}>Add To Cart</AddToCartButton> */}

      <Container>
        <SingleProduct>
          <Left>
            <ContainerImage>
              <Image src={`http://localhost:5000${product.image}`} onClick={() => setShowImage(true)}></Image>
            </ContainerImage>
          </Left>
          <Right>
            <Name>{product.name}</Name>
            <Description>{product.description}</Description>
            <Wrap>
              <Availability>{`Διαθεσιμότητα:${product.availability}`}</Availability>
              <Price>
                {product.discountPrice === 0 ? (
                  <DiscountPrice>{product.price}€</DiscountPrice>
                ) : (
                  <>
                    <RegularPrice>{product.price}€</RegularPrice>
                    <DiscountPrice>{product.discountPrice}€</DiscountPrice>
                  </>
                )}
              </Price>
              <SelectInput
                onChange={(e) => {
                  setQty({ current: Number(e.target.value), max: counter.length })
                }}
              >
                {/* <InputOption value="atiki">Αττική</InputOption> */}
                {counter.map((count) => (
                  <InputOption value={count} key={count}>
                    {count}
                  </InputOption>
                ))}
              </SelectInput>
            </Wrap>
            <CartButton onClick={handleClick}>ADD TO CART</CartButton>
          </Right>

          {showImage && (
            <FullImageCon>
              <FullImage src={`http://localhost:5000${product.image}`}></FullImage>
              <ExitImage onClick={() => setShowImage(false)}>X</ExitImage>
            </FullImageCon>
          )}
        </SingleProduct>
      </Container>
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
