import React, { useEffect, useState } from 'react'
import {
  Container,
  StyledInput,
  StyledButton,
  StyledTermsAndConditions,
  StyledInputText,
  InputContainer,
  LoadingIcon
} from './CurrencySelector.styled'
import { useLazyQuery } from '@apollo/client'
import { CurrencyData } from '../../types/cryptoCurrency'
import { GET_MARKETS } from '../../query/GetMarkets'

interface CurrencySelectorProps {
  handleAddCurrency: (currency: CurrencyData) => void
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ handleAddCurrency }) => {
  const [getData, { data, loading }] = useLazyQuery(GET_MARKETS, { fetchPolicy: 'network-only' })
  const [error, setError] = useState(false)
  const [input, setInput] = useState('')

  useEffect(() => {
    if ((data?.markets && data.markets.length < 1) && input !== '') {
      setError(true)
      setInput('')
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
                <StyledInput data-testid="input" value={input} hasError={error} onChange={(event) => { setInput(event.target.value) }}/>
                {loading
                  ? <LoadingIcon />
                  : <StyledInputText hasError={error}>
                        {`Cryptocurrency code ${error ? 'invalid' : ''}`}
                    </StyledInputText>
                }
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
                  setInput('')
                }}>
                Add
            </StyledButton>
            <StyledTermsAndConditions>Use of this service is subject to terms and conditions</StyledTermsAndConditions>
        </Container>
  )
}

export default CurrencySelector
