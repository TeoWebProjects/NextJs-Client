import { useContext, useEffect, useState } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import { BsList } from 'react-icons/bs'
import { Container, Logo, CartIcon, BurgerIcon, Search, Right, Login } from './MainHeader.style'
import { useMobileMenu } from '../../../Contexts/MobileMenuContext'
import CartContext from '../../../Contexts/CartContext/cart-context'
import Link from 'next/link'
import { getCookie } from '../../../utils/getCookie'

const MainHeader = () => {
  const { handleMenu } = useMobileMenu()
  const { cart } = useContext(CartContext)
  const [userInfoLocal, setUserInfoLocal] = useState({})

  useEffect(() => {
    const local = getCookie('userInfo')
    if (local) {
      setUserInfoLocal(JSON.parse(local))
    }
  }, [])

  return (
    <>
      <Container>
        <BurgerIcon onClick={handleMenu}>
          <BsList />
        </BurgerIcon>
        <Link href={`http://localhost:3000/`}>
          <Logo>NextShop</Logo>
        </Link>
        <Search type="search" placeholder="Αναζήτηση…" />
        <Right>
          {userInfoLocal.name ? (
            <Link href="http://localhost:3000/profile">
              <Login>{userInfoLocal.name}</Login>
            </Link>
          ) : (
            <Link href={`http://localhost:3000/login`}>
              <Login>Login</Login>
            </Link>
          )}

          <Link href={`http://localhost:3000/cart`}>
            <CartIcon>
              <FaShoppingBasket />
              {cart.length}
            </CartIcon>
          </Link>
        </Right>
      </Container>
    </>
  )
}

export default MainHeader
