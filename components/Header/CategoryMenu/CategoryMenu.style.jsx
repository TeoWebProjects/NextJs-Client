import styled from 'styled-components'

export const Container2 = styled.div`
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  background: ${(props) => props.theme.colors.blue};
  color: white;
  @media (max-width: 768px) {
    display: none;
  }
`
export const CategoryCon = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;

  a {
    color: white;
    text-decoration: none;
    position: relative;
  }
  a:active {
    color: white;
  }
`
export const Category = styled.li`
  padding: 0.1rem;
`

export const SubCaterories = styled.div`
  position: absolute;
  top: 25px;
  background: white;
  padding: 1.2rem;
  z-index: 99;
  gap: 3rem;
  font-size: 0.9rem;
  display: none;

  &:hover {
    display: flex;
  }
`

export const SubCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`
export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  a {
    width: max-content;
  }
`
export const SubCategoryText = styled.div`
  color: ${(props) => props.headerColor || '#282828'};
`
export const BoxCategory = styled.div`
  position: relative;
  &:hover ${SubCaterories} {
    display: flex;
  }
`
