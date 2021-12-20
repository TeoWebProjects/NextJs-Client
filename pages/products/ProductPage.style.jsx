import styled from 'styled-components'

export const Container = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

export const SingleProduct = styled.div`
  display: flex;
  gap: 5rem;
  margin-top: 1.5rem;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`
export const ContainerImage = styled.div`
  max-width: 100%;
  height: auto;
  display: flex;
  padding: 1rem;
  object-fit: contain;
`
export const Image = styled.img`
  width: 100%;
  height: auto;
  cursor: zoom-in;
`

export const Name = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  @media (max-width: 960px) {
    font-size: 1rem;
  }
`
export const Description = styled.div`
  text-align: center;
  font-size: 1.1rem;
  margin-top: 1rem;
`
export const Price = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  align-items: center;
  align-self: center;
`

export const RegularPrice = styled.div`
  opacity: 0.6;
  text-decoration: line-through;
  align-self: center;
`

export const DiscountPrice = styled.div`
  font-weight: bold;
  align-self: center;
`

export const CartButton = styled.button`
  border: none;
  padding: 1rem;
  font-size: bold;
  background: #db163a;
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
`
export const Availability = styled.div`
  align-self: center;
`

export const FullImageCon = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(30, 20, 20, 0.5);
  top: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 1rem;
`

export const FullImage = styled.img`
  width: 100%
  height: auto;
  align-self: center;
`

export const ExitImage = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid white;
  background: white;
  color: black;
  font-weight: bold;
  border-radius: 50%;
  font-size: 1.1rem;
  text-align: center;
  cursor: pointer;
  margin-top: 1rem;
`
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  margin-top: 1rem;
`

export const SelectInput = styled.select`
  width: 70px;
  border: 1px solid #ddd;
  padding: 0 0.75em;
  height: 2.507em;
  font-size: 0.97em;
  border-radius: 0;
  max-width: 100%;
  vertical-align: middle;
  background-color: #fff;
  color: #333;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);

  &:focus {
    box-shadow: 0 0 5px #ccc;
    opacity: 1;
    outline: 0;
    color: #333;
    background-color: #fff;
  }
`
export const InputOption = styled.option``
