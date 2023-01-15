import styled from 'styled-components'

export const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledDescriptionTitle = styled.h1`
  margin-top: 80px;
  max-width: 491px;
  color: #FFFFFF;
  font-family: "Kohinoor Devanagari", serif;
  font-size: xxx-large;
  @media screen and (max-width: 1200px) {
    text-align: start;
  }
`

export const StyledDescriptionText = styled.span`
  font-size: xx-large;
  max-width: 400px;
  font-family: "Kohinoor Devanagari", serif;
  color: #9b9999;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`
