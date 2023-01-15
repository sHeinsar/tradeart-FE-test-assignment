import { useState } from 'react'
import { CryptoCurrencyActions, CurrencyData } from '../types/cryptoCurrency'

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
