import styled from 'styled-components'

export const Products = styled.div`
  display: grid;
  grid-template-columns: 300px;
  width: 100%;
  padding: 1rem;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 300px 300px;
  }
  @media only screen and (min-width: 1120px) {
    grid-template-columns: 300px 300px 300px;
  }
  @media only screen and (min-width: 1420px) {
    grid-template-columns: 300px 300px 300px 300px;
  }
`

export const Title = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
`
export const Product = styled.div``
