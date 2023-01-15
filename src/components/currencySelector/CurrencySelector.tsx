import React, { useEffect, useRef, useState } from 'react'
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
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if ((data?.markets && data.markets.length < 1) && inputRef.current) {
      setError(true)
    }
    if ((data?.markets && data.markets.length > 0) && inputRef.current) {
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
                <StyledInput hasError={error} ref={inputRef}/>
                <StyledInputText hasError={error}>{`Cryptocurrency code ${error ? 'not found' : ''}`}</StyledInputText>
            </InputContainer>
            <StyledButton
                onClick={async () => {
                  if (inputRef?.current?.value === '') {
                    setError(true)
                    return
                  }
                  inputRef.current &&
                    await getData({ variables: { ticker: `Binance:${inputRef.current.value}/EUR` } })
                }}>
                Add
            </StyledButton>
            <StyledTermsAndConditions>Use of this service is subject to terms and conditions</StyledTermsAndConditions>
        </Container>
  )
}

export default CurrencySelector
