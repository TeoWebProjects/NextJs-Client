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

const CartPage = () => {
  const [subTotal, setSubTotal] = useState(0)
  const { cart } = useContext(CartContext)

  useEffect(() => {
    let total = 0
    setSubTotal(0)
    if (cart) {
      cart.forEach((p) => {
        // setSubTotal(subTotal + p.discountPrice * p.qty.current)
        total += p.discountPrice
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
                    <ProductImage
                      src={product.image.replace(
                        'https://www.fylliana.gr/images/products/original/',
                        'https://www.fylliana.gr/images/products/thumb/'
                      )}
                    />
                    <ProductName>{product.name}</ProductName>
                    <ProductDetails>
                      {/* <SelectQuantity
                        current={product.qty.current}
                        max={product.qty.max}
                        callback={(e) => {
                          dispatch(
                            addToCart(product.product, { current: Number(e.target.value), max: product.qty.max })
                          )
                        }}
                      /> */}
                      <ProductPrice>
                        <RegularPrice>{product.price.toFixed(2)}€</RegularPrice>
                        <DiscountPrice>{product.discountPrice.toFixed(2)}€</DiscountPrice>
                      </ProductPrice>
                    </ProductDetails>
                    <DeleteButton>X</DeleteButton>
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
                  <Link href={`http://localhost:3000/`}>
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
