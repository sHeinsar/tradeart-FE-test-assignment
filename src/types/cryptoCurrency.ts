export interface CurrencyData {
  ticker: string
  price: string
}

export interface CryptoCurrencyActions {
  trackedCurrencyList: CurrencyData[]
  handleRemoveCurrency: (index: number) => void
  handleAddCurrency: (currency: CurrencyData) => void
}
