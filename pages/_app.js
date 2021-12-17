import '../styles/globals.css'
import { MobileMenuProvider } from '../Contexts/MobileMenuContext'
import CartState from '../Contexts/CartContext/CartState'

function MyApp({ Component, pageProps }) {
  return (
    <MobileMenuProvider>
      <CartState>
        <Component {...pageProps} />
      </CartState>
    </MobileMenuProvider>
  )
}

export default MyApp
