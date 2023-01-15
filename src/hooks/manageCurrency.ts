import { useState } from 'react'
import { CryptoCurrencyActions, CurrencyData } from '../types/cryptoCurrency'
import { gql } from '@apollo/client'

export const GET_MARKETS = gql`
  query($ticker: String!) {
    markets(filter:{ marketSymbol: {_eq:$ticker} }) {
      baseSymbol
      ticker {
        lastPrice
      }
    }
  }
`

export const manageCurrency = (): CryptoCurrencyActions => {
  const [trackedCurrencyList, setTrackCurrencyList] = useState<CurrencyData[]>([])

  const handleRemoveCurrency = (index: number): void => {
    const filteredCurrencies = trackedCurrencyList.filter((_, i) => i !== index)
    setTrackCurrencyList(filteredCurrencies)
  }

  const handleAddCurrency = (currencyToAdd: CurrencyData): void => {
    const uniqueCurrencies = trackedCurrencyList.filter(
      (currency) => currency.ticker !== currencyToAdd.ticker
    )
    setTrackCurrencyList([...uniqueCurrencies, currencyToAdd])
  }

  return { trackedCurrencyList, handleRemoveCurrency, handleAddCurrency }
}
