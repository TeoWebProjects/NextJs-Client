import { useContext, useState, useEffect } from 'react'
import Theme from '../../Theme'
import CartContext from '../../Contexts/CartContext/cart-context'
import Link from 'next/link'
import {
  Container,
  Title,
  Cart,
  Left,
  ProductCart,
  ProductImage,
  ProductName,
  ProductPrice,
  RegularPrice,
  DiscountPrice,
  Right,
  SubTitle,
  TotalPrice,
  TotalValue,
  TextTotalPrice,
  CheckOutButton,
  DeleteButton,
  Fix,
  SelectInput,
  ProductDetails,
  InputOption,
} from './cartPage.style'
import SelectQuantity from '../../components/SelectQuantity/SelectQuantity'

const CartPage = () => {
  const [subTotal, setSubTotal] = useState(0)
  const { cart, addToCart, removeProduct } = useContext(CartContext)

  useEffect(() => {
    let total = 0
    setSubTotal(0)
    if (cart) {
      cart.forEach((p) => {
        if (p.discountPrice === 0) {
          total += p.price * p.qty.current
        } else {
          total += p.discountPrice * p.qty.current
        }
      })
    }
    setSubTotal(total.toFixed(2))
    console.log(subTotal)
  }, [cart])
  return (
    <Theme>
      <Container>
        {cart.length > 0 ? (
          <>
            <Title>ΚΑΛΑΘΙ ΑΓΟΡΩΝ</Title>
            <Cart>
              <Left>
                {cart.map((product) => (
                  <ProductCart key={product._id}>
                    <ProductImage src={`http://localhost:5000${product.image}`} />
                    <ProductName>{product.name}</ProductName>
                    <ProductDetails>
                      <SelectQuantity
                        current={product.qty.current}
                        max={product.qty.max}
                        callback={(e) => {
                          // addToCart(product.product, { current: Number(e.target.value), max: product.qty.max })
                          product.qty = { current: Number(e.target.value), max: product.qty.max }
                          addToCart(product)
                        }}
                      />
                      {product.discountPrice === 0 ? (
                        <ProductPrice>
                          <DiscountPrice>{product.price.toFixed(2) * product.qty.current}€</DiscountPrice>
                        </ProductPrice>
                      ) : (
                        <ProductPrice>
                          <RegularPrice>{product.price.toFixed(2) * product.qty.current}€</RegularPrice>
                          <DiscountPrice>{product.discountPrice.toFixed(2) * product.qty.current}€</DiscountPrice>
                        </ProductPrice>
                      )}
                    </ProductDetails>
                    <DeleteButton
                      onClick={() => {
                        removeProduct(product)
                      }}
                    >
                      X
                    </DeleteButton>
                  </ProductCart>
                ))}
              </Left>
              <Right>
                <SubTitle>ΣΥΝΟΛO ΚΑΛΑΘΙΟΥ</SubTitle>
                <TotalPrice>
                  <TextTotalPrice>Συνολική τιμή:</TextTotalPrice>
                  <TotalValue>{subTotal}€</TotalValue>
                </TotalPrice>
                <Fix>
                  <Link href={`http://localhost:3000/checkout`}>
                    <CheckOutButton>ΟΛΟΚΛΗΡΩΣΗ ΠΑΡΑΓΓΕΛΙΑΣ</CheckOutButton>
                  </Link>
                </Fix>
              </Right>
            </Cart>
          </>
        ) : (
          <Title>Δεν υπάρχουν προιοντα στο καλάθι</Title>
        )}
      </Container>
    </Theme>
  )
}

export default CartPage
