import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  padding-left: 2rem;
  padding-right: 2rem;
  gap: 2rem;
  margin-top: 1rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 2px solid #db163a;
  padding: 1rem;
`

export const Text = styled.label`
  margin-bottom: 0.5rem;
`
export const Input = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  padding: 0 0.75em;
  height: 2.507em;
  font-size: 0.97em;
  border-radius: 0;
  max-width: 100%;
  width: 100%;
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

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`
export const FirstName = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const LastName = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const SemiBox = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`
export const SemiInput = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  padding: 0 0.75em;
  height: 2.507em;
  font-size: 0.97em;
  border-radius: 0;
  max-width: 100%;
  width: 100%;
  vertical-align: middle;
  background-color: #fff;
  color: #333;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
`

export const SelectInput = styled.select`
  width: 100%;
  border: 1px solid #ddd;
  padding: 0 0.75em;
  height: 2.507em;
  font-size: 0.97em;
  border-radius: 0;
  max-width: 100%;
  width: 100%;
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

export const Souma = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1.5rem;
  color: #666;
`
export const Headera = styled.div`
  font-size: 1.5rem;
`

export const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #ececec;
  padding-bottom: 0.3rem;
`

export const Proion = styled.div``
export const Yposunolo = styled.div``

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ececec;
  padding-bottom: 0.3rem;
`
export const ItemLeft = styled.div`
  width: 70%;
  align-self: center;
  @media (max-width: 960px) {
    width: 60%;
    font-size: 0.9rem;
  }
`
export const ItemRight = styled.div`
  align-self: center;
  @media (max-width: 960px) {
    font-size: 0.9rem;
  }
`
export const OrderButton = styled.button`
  border: none;
  background: #db163a;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem;
  color: white;
  width: 65%;
  align-self: center;
  cursor: pointer;
  margin-top: 1rem;
  @media (max-width: 960px) {
    width: 90%;
  }
`
export const Policy = styled.div``
