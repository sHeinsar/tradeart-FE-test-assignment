import React, { useEffect, useState } from 'react'
import {
  Container,
  StyledInput,
  StyledButton,
  StyledTermsAndConditions,
  StyledInputText,
  InputContainer
} from './CurrencySelector.styled'
import { useLazyQuery } from '@apollo/client'
import { CurrencyData } from '../../types/cryptoCurrency'
import { GET_MARKETS } from '../../hooks/manageCurrency'

interface CurrencySelectorProps {
  handleAddCurrency: (currency: CurrencyData) => void
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ handleAddCurrency }) => {
  const [getData, { data }] = useLazyQuery(GET_MARKETS, { fetchPolicy: 'network-only' })
  const [error, setError] = useState(false)
  const [input, setInput] = useState('')
  useEffect(() => {
    if ((data?.markets && data.markets.length < 1) && input !== '') {
      setError(true)
    }
    if ((data?.markets && data.markets.length > 0) && input !== '') {
      setError(false)
      handleAddCurrency({
        ticker: data.markets[0].baseSymbol,
        price: data.markets[0].ticker.lastPrice
      })
    }
  }, [data])

  return (
        <Container>
            <InputContainer>
                <StyledInput hasError={error} onChange={(event) => { setInput(event.target.value) }}/>
                <StyledInputText hasError={error}>
                    {`Cryptocurrency code ${error ? 'invalid' : ''}`}
                </StyledInputText>
            </InputContainer>
            <StyledButton
                disabledStyle={input === ''}
                disabled={input === ''}
                onClick={async () => {
                  if (input === '') {
                    setError(true)
                    return
                  }
                  await getData({ variables: { ticker: `Binance:${input}/EUR` } })
                }}>
                Add
            </StyledButton>
            <StyledTermsAndConditions>Use of this service is subject to terms and conditions</StyledTermsAndConditions>
        </Container>
  )
}

export default CurrencySelector
