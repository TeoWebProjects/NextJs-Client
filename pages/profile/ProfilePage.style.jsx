import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 1rem;
`
export const ErrorText = styled.div`
  text-align: center;
  font-size: 2rem;
`
export const ProfileBoard = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
`

export const FeatureText = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`
export const FeatureIcon = styled.div`
  font-size: 5rem;
`
export const Feature = styled.div`
  width: 300px;
  height: 300px;
  background-color: #f3f3f3;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(29, 53, 87);
  }
  &:hover ${FeatureText} {
    color: white;
  }
  &:hover ${FeatureIcon} {
    color: white;
  }
`

export const Heading = styled.div`
  font-size: 1.4rem;
`
export const HeadingWelcome = styled.div`
  margin-bottom: 1rem;
`
export const HeadingText = styled.div`
  margin-bottom: 2rem;
`
