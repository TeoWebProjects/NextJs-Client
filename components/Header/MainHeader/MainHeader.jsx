import { useContext, useEffect, useState, useRef } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import { BsList } from 'react-icons/bs'
import {
  Container,
  Logo,
  CartIcon,
  BurgerIcon,
  Search,
  Right,
  Login,
  SearchContainer,
  SearchResult,
  SearchProduct,
  SearchImage,
  SearchName,
  SearchPrice,
  CartLength,
  LeftSearchBox,
} from './MainHeader.style'
import { useMobileMenu } from '../../../Contexts/MobileMenuContext'
import CartContext from '../../../Contexts/CartContext/cart-context'
import Link from 'next/link'
import { getCookie } from '../../../utils/getCookie'

const MainHeader = () => {
  const { handleMenu } = useMobileMenu()
  const { cart } = useContext(CartContext)
  const [userInfoLocal, setUserInfoLocal] = useState({})
  const [searchResult, setSearchResult] = useState([])
  const inputSearch = useRef(null)

  // const [focused, setFocused] = useState(false)
  // const [focused2, setFocused2] = useState(false)
  // const onFocus = () => setFocused(true)
  // const onBlur = () => setFocused(false)

  const handleSearch = async (e) => {
    const queryProducts = await fetch(`http://localhost:5000/api/products/search/${e.target.value}`)
    const results = await queryProducts.json()
    setSearchResult(results)
  }

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
        <SearchContainer>
          <Search type="search" placeholder="Αναζήτηση…" onChange={handleSearch} ref={inputSearch} />
          <SearchResult>
            {searchResult.length > 0
              ? searchResult.map((product) => (
                  <Link href={`http://localhost:3000/products/${product._id}`}>
                    <SearchProduct
                      key={product._id}
                      onClick={() => {
                        inputSearch.current.value = ''
                        setSearchResult([])
                      }}
                    >
                      <LeftSearchBox>
                        <SearchImage src={`http://localhost:5000${product.image}`} />
                        <SearchName>{product.name}</SearchName>
                      </LeftSearchBox>
                      <SearchPrice>{product.price}€</SearchPrice>
                    </SearchProduct>
                  </Link>
                ))
              : null}
          </SearchResult>
        </SearchContainer>

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
              {cart.length > 0 ? (
                <CartLength>
                  <div className="test">{cart.length}</div>
                </CartLength>
              ) : null}
            </CartIcon>
          </Link>
        </Right>
      </Container>
    </>
  )
}

export default MainHeader
