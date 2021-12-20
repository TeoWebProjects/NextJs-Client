import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  @media (max-width: 1260px) {
    width: 80%;
  }

  @media (max-width: 960px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

export const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`

export const Cart = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 1rem;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Left = styled.div`
  flex: 2;
  border-radius: 25px;
  padding: 1rem;
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ProductCart = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
  border-bottom: 2px solid #827a7a;
  padding-bottom: 1rem;
`

export const ProductImage = styled.img`
  align-self: center;
  width: 10%;
  height: auto;
`

export const ProductName = styled.div`
  align-self: center;
  font-weight: 500;
  width: 400px;
  @media (max-width: 1260px) {
    font-size: 0.8rem;
  }
`

export const ProductPrice = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

export const RegularPrice = styled.div`
  align-self: flex-end;
  text-decoration: line-through;
  @media (max-width: 1260px) {
    font-size: 0.6rem;
  }
`

export const DiscountPrice = styled.div`
  align-self: center;
  font-size: 1.5rem;
  font-weight: 500;
  @media (max-width: 1260px) {
    font-size: 1rem;
  }
`

export const Right = styled.div`
  flex: 1;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 2rem;
  margin-top: 2rem;
  align-self: flex-start;
  padding: 1rem;
  border: 2px solid #282828;
  border-radius: 25px;
  background: #f6f6f6;
  @media (max-width: 960px) {
    align-self: center;
    width: 100%;
    border: none;
  }
`
export const SubTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: center;
`

export const TextTotalPrice = styled.div`
  align-self: center;
`

export const TotalValue = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  align-self: center;
`

export const CheckOutButton = styled.button`
  border: none;
  background: #db163a;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem;
  color: white;
  width: 65%;
  align-self: center;
  cursor: pointer;
  @media (max-width: 1260px) {
    font-size: 0.8rem;
    width: 90%;
  }
`

export const DeleteButton = styled.div`
  align-self: center;
  width: 23px;
  height: 23px;
  background: #db163a;
  font-size: 1.2rem;
  border-radius: 50%;
  text-align: center;
  font-weight: 500;
  color: white;
  cursor: pointer;
  line-height: 1.2;

  &:hover {
    background: #ff002f;
  }

  @media (max-width: 1260px) {
    width: 20px;
    height: 20px;
    line-height: 1.2rem;
    align-self: flex-start;
  }
`

export const Fix = styled.div`
  text-align: center;
  width: 100%;
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
export const ProductDetails = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 1rem;
`
