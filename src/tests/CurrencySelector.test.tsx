import { MockedProvider } from '@apollo/client/testing'
import { GET_MARKETS } from '../query/GetMarkets'
import { fireEvent, render, waitFor, screen } from '@testing-library/react'
import CurrencySelector from '../components/currencySelector/CurrencySelector'
import React from 'react'

export const mocks = [
  {
    request: {
      query: GET_MARKETS,
      variables: { ticker: 'Binance:BTC/EUR' }
    },
    result: {
      data: {
        markets: [
          {
            baseSymbol: 'BTC',
            ticker: {
              lastPrice: '12345'
            }
          }
        ]
      }
    }
  }
]

test('component renders correctly', () => {
  const handleAddCurrency = jest.fn()
  const { container } = render(
        <MockedProvider mocks={mocks}>
            <CurrencySelector handleAddCurrency={handleAddCurrency}/>
        </MockedProvider>
  )
  expect(container.firstChild).toMatchSnapshot()
  expect(container.querySelector('input')).toBeTruthy()
  expect(container.querySelector('button')).toBeTruthy()
  expect(handleAddCurrency).toHaveBeenCalledTimes(0)
})

test('handleAddCurrency function is not called when an invalid input is entered and the "Add" button is clicked', async () => {
  const handleAddCurrency = jest.fn()
  const { getByText } = render(
      <MockedProvider mocks={mocks}>
        <CurrencySelector handleAddCurrency={handleAddCurrency}/>
      </MockedProvider>
  )

  const button = getByText(/Add/i)

  fireEvent.click(button)
  await waitFor(() => {
    expect(handleAddCurrency).toHaveBeenCalledTimes(0)
  })
})

test('handleAddCurrency function is called when an valid input is entered and the "Add" button is clicked', async () => {
  const handleAddCurrency = jest.fn()
  const { getByText } = render(
      <MockedProvider mocks={mocks}>
        <CurrencySelector handleAddCurrency={handleAddCurrency}/>
      </MockedProvider>
  )

  const button = getByText(/Add/i)
  const input = screen.getByTestId('input')

  fireEvent.change(input, { target: { value: 'BTC' } })
  fireEvent.click(button)
  await waitFor(() => {
    expect(handleAddCurrency).toHaveBeenCalledTimes(1)
  })
})
