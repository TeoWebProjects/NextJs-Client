import { useContext, useState } from 'react'
import Theme from '../../Theme'
import CartContext from '../../Contexts/CartContext/cart-context'
import {
  Container,
  Left,
  Right,
  Text,
  Input,
  Box,
  FirstName,
  LastName,
  SemiBox,
  SemiInput,
  SelectInput,
  InputOption,
  Souma,
  Headera,
  SubTitle,
  Proion,
  Items,
  ItemLeft,
  ItemRight,
  OrderButton,
  Policy,
  Yposunolo,
} from './CheckoutPage.style'
import Cookies from 'js-cookie'
const CheckoutPage = () => {
  const { cart, addToCart, removeProduct } = useContext(CartContext)
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [region, setRegion] = useState('Αττική')
  const [tk, SetTk] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [userInfo, setUserInfo] = useState(Cookies.get('userInfo'))
  let sumPrice = 0
  cart.forEach((item) => {
    if (item.discountPrice === 0) {
      sumPrice += item.price * Number(item.qty.current)
    } else {
      sumPrice += item.discountPrice * Number(item.qty.current)
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const cartData = []
    const userid = userInfo
    cart.forEach((item) => {
      if (item.discountPrice === 0) {
        cartData.push({ name: item.name, price: item.price, quantity: item.qty.current, product: item._id })
      } else {
        cartData.push({ name: item.name, price: item.discountPrice, quantity: item.qty.current, product: item._id })
      }
    })
    const orderData = {
      orderItems: cartData,
      shippingAddress: {
        name: name,
        lastname: lastname,
        address: address,
        city: city,
        region: region,
        postalCode: tk,
        number: number,
        email: email,
      },
      paymentMethod: 'Αντικαταβολή',
      shippingPrice: 10,
      totalPrice: sumPrice,
    }

    if (userid !== undefined) {
      orderData.user_id = JSON.parse(userid)._id
    }

    if (cartData && orderData) {
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      }
      try {
        const createOrder = await fetch('http://localhost:5000/api/orders', config)
        const message = createOrder.json()
      } catch (error) {
        console.log(error)
      }

      // console.log(orderData)
    }
  }

  return (
    <Theme>
      <Container>
        <Left>
          <SemiBox>
            <FirstName>
              <Text>Όνομα *</Text>
              <SemiInput onChange={(e) => setName(e.target.value)} name="firstname"></SemiInput>
            </FirstName>
            <LastName>
              <Text>Επίθετο *</Text>
              <SemiInput onChange={(e) => setLastname(e.target.value)} name="lastname"></SemiInput>
            </LastName>
          </SemiBox>
          <Box>
            <Text>Διεύθυνση *</Text>
            <Input onChange={(e) => setAddress(e.target.value)} name="address"></Input>
          </Box>
          <Box>
            <Text>Πόλη / Κωμόπολη *</Text>
            <Input onChange={(e) => setCity(e.target.value)} name="city"></Input>
          </Box>
          <Box>
            <Text>Περιφέρεια (προαιρετικό)</Text>
            <SelectInput onChange={(e) => setRegion(e.target.options[e.target.options.selectedIndex].text)}>
              <InputOption value="atiki" defaultValue>
                Αττική
              </InputOption>
              <InputOption value="das">Ανατολική Μακεδονία και Θράκη</InputOption>
              <InputOption value="opel">Κεντρική Μακεδονία</InputOption>
              <InputOption value="audi">Δυτική Μακεδονία</InputOption>
              <InputOption value="audi">Ήπειρος</InputOption>
              <InputOption value="audi">Θεσσαλία</InputOption>
              <InputOption value="audi">Ιόνια νησιά</InputOption>
              <InputOption value="audi">Δυτική Ελλάδα</InputOption>
              <InputOption value="audi">Κεντρική Ελλάδα</InputOption>
              <InputOption value="audi">Πελοπόννησος</InputOption>
              <InputOption value="audi">Βόρειο Αιγαίο</InputOption>
              <InputOption value="audi">Νότιο Αιγαίο</InputOption>
              <InputOption value="audi">Κρήτη</InputOption>
            </SelectInput>
          </Box>
          <Box>
            <Text>Ταχυδρομικός κώδικας *</Text>
            <Input onChange={(e) => SetTk(e.target.value)}></Input>
          </Box>
          <Box>
            <Text>Αριθμός τηλεφώνου *</Text>
            <Input onChange={(e) => setNumber(e.target.value)}></Input>
          </Box>
          <Box>
            <Text>Διεύθυνση email *</Text>
            <Input onChange={(e) => setEmail(e.target.value)}></Input>
          </Box>
        </Left>
        <Right>
          <Headera>Η ΠΑΡΑΓΓΕΛΙΑ ΣΑΣ</Headera>
          <Souma>
            <SubTitle>
              <Proion>ΠΡΟΪΟΝ</Proion>
              <Yposunolo>ΥΠΟΣΥΝΟΛΟ</Yposunolo>
            </SubTitle>
            {cart.map((item) => (
              <Items key={item._id}>
                <ItemLeft> {item.name} </ItemLeft>
                <ItemRight>
                  {item.discountPrice === 0 ? (
                    <>
                      x{item.qty.current} {item.price * Number(item.qty.current)}€
                    </>
                  ) : (
                    <>
                      x{item.qty.current} {item.discountPrice * Number(item.qty.current)}€
                    </>
                  )}
                </ItemRight>
              </Items>
            ))}
            <Items>
              <ItemLeft>Αποστολή</ItemLeft>
              <ItemRight>Δωρεάν μεταφορικά</ItemRight>
            </Items>
            <Items>
              <ItemLeft>Σύνολο </ItemLeft>
              <ItemRight>{sumPrice}€</ItemRight>
            </Items>

            <Items>
              <ItemLeft>Τρόπος πληρωμής </ItemLeft>
              <ItemRight>Αντικαταβολή</ItemRight>
            </Items>
            <OrderButton onClick={handleSubmit}>ΑΠΟΣΤΟΛΗ ΠΑΡΑΓΓΕΛΙΑΣ</OrderButton>
            <Policy>
              Τα προσωπικά σας δεδομένα θα χρησιμοποιηθούν για τη διεκπεραίωση της παραγγελίας σας, την άρτια εμπειρία
              σας στον ιστότοπο και για ό,τι ακόμα περιγράφεται στην πολιτική απορρήτου.
            </Policy>
          </Souma>
        </Right>
      </Container>
    </Theme>
  )
}

export default CheckoutPage
