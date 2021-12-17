import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

export const XButton = styled.div`
  width: 23px;
  height: 23px;
  background: ${(props) => props.theme.colors.red};
  font-size: 1.2rem;
  border-radius: 50%;
  text-align: center;
  font-weight: 500;
  color: white;
  cursor: pointer;
  line-height: 1.2;
  position: relative;
  left: calc(300px - 23px - 5px);
  top: 5px;

  &:hover {
    background: #ff002f;
  }
`
export const Menu = styled.div`
  width: 300px;
  height: 100%;
  background: white;
`

export const Search = styled.input`
  height: 30px;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.09);
  padding: 1rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 1rem;
`
export const Categories = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  list-style-type: none;
  gap: 2rem;
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
`
export const Category = styled.li`
  align-self: center;
`
export const LinkWrapper = styled.div`
  align-self: center;
`
