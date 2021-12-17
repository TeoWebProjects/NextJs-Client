import Link from 'next/link'
import { Container, Menu, XButton, Wrapper, Search, Categories, LinkWrapper, Category } from './MobileMenu.style'
import { useMobileMenu } from '../../Contexts/MobileMenuContext'

const MobileMenu = () => {
  const { handleMenu } = useMobileMenu()
  return (
    <Container>
      <Menu>
        <XButton onClick={handleMenu}>X</XButton>
        <Wrapper>
          <Search type="search" placeholder="Αναζήτηση…" />
          <Categories>
            <LinkWrapper>
              <Link href="/products/7">
                <Category>ΚΑΝΑΠΕΔΕΣ</Category>
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link href="/products/171">
                <Category>ΓΡΑΦΕΙΑ</Category>
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link href="/products/22">
                <Category>ΝΤΟΥΛΑΠΕΣ</Category>
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link href="/products/156">
                <Category>ΚΡΕΒΑΤΙΑ</Category>
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link href="/products/12">
                <Category>ΠΟΛΥΘΡΟΝΕΣ</Category>
              </Link>
            </LinkWrapper>
          </Categories>
        </Wrapper>
      </Menu>
    </Container>
  )
}

export default MobileMenu
