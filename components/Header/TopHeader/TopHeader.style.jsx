import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.red};
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
`

export const Text = styled.div`
  width: 100%;
  color: white;
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  letter-spacing: 1.1px;

  @media only screen and (max-width: 600px) {
    font-size: 0.9rem;
    letter-spacing: 0;
  }
`
