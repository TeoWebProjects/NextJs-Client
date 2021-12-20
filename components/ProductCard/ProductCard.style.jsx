import styled from 'styled-components'
export const Product = styled.div`
  justify-self: center;
  width: 300px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px -2px, rgb(0 0 0 / 24%) 0px 1px 2px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`
export const ProductImage = styled.img`
  display: block;
  max-width: 300px;
  height: auto;
  z-index: -1;

  padding: 1rem;
  object-fit: contain;
`
export const ContainerImage = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  cursor: pointer;
`
export const Name = styled.div`
  text-align: center;
`

export const Price = styled.div``
