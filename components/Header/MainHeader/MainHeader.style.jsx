import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
`
export const Logo = styled.div`
  color: ${(props) => props.theme.colors.blue};
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`
export const BurgerIcon = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`
export const CartIcon = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`

export const Search = styled.input`
  height: 30px;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.09);
  padding: 1rem;
  width: 50%;
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`
export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 1rem;
`

export const Login = styled.div`
  color: #7d7d7d;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`
