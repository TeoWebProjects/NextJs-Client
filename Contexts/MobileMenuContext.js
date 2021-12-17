import { useState, useContext, createContext } from 'react'

const MobileMenuContext = createContext()

export function MobileMenuProvider({ children }) {
  const [isVisibleMobileMenu, setIsVisibleMobileMenu] = useState(false)

  const handleMenu = () => {
    setIsVisibleMobileMenu(!isVisibleMobileMenu)
  }

  const value = { isVisibleMobileMenu, handleMenu }

  return <MobileMenuContext.Provider value={value}>{children}</MobileMenuContext.Provider>
}

export function useMobileMenu() {
  return useContext(MobileMenuContext)
}
