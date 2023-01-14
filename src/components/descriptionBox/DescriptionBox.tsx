import React from 'react'
import { StyledDescriptionContainer, StyledBitCasinoLogo, StyledDescriptionTitle, StyledDescriptionText } from './DescriptionBox.styled'

const DescriptionBox: React.FC = () => {
  return (
        <StyledDescriptionContainer>
            <StyledBitCasinoLogo />
            <StyledDescriptionTitle>Now you can track all your cryptos here!</StyledDescriptionTitle>
            <StyledDescriptionText>Just enter the cryptocurrency code on the form to the right.</StyledDescriptionText>
        </StyledDescriptionContainer>
  )
}

export default DescriptionBox
