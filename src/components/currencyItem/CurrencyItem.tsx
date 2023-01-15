import React from 'react'
import { Container, TrophyIcon, CurrencyDataContainer, RemoveButton, StyledTicker, StyledValue } from './CurrencyItem.styled'

interface CurrencyItemProps {
  handleRemoveCurrency: () => void
  title: string
  currentValue: string
}

const CurrencyItem: React.FC<CurrencyItemProps> = ({ title, currentValue, handleRemoveCurrency }) => {
  return (
        <Container animate={true}>
            <TrophyIcon />
            <CurrencyDataContainer>
                <StyledTicker>{title}</StyledTicker>
                <StyledValue>{`${currentValue} €`}</StyledValue>
            </CurrencyDataContainer>
            <RemoveButton onClick={() => { handleRemoveCurrency() }}/>
        </Container>
  )
}

export default CurrencyItem
