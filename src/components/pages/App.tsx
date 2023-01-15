import React from 'react'
import Layout from '../../layouts/Layout'
import { Content, Container, CurrencyListContainer, StyledBitCasinoLogo, ContainerRow } from './App.styled'
import DescriptionBox from '../descriptionBox/DescriptionBox'
import CurrencyItem from '../currencyItem/CurrencyItem'
import CurrencySelector from '../currencySelector/CurrencySelector'
import { manageCurrency } from '../../hooks/manageCurrency'

const App: React.FC = () => {
  const { trackedCurrencyList, handleRemoveCurrency, handleAddCurrency } = manageCurrency()
  return (
        <Layout>
            <Content>
                <Container>
                    <StyledBitCasinoLogo />
                    <ContainerRow>
                        <DescriptionBox/>
                        <CurrencySelector handleAddCurrency={handleAddCurrency}/>
                    </ContainerRow>
                    <CurrencyListContainer>
                        {trackedCurrencyList.map((data, index) => {
                          return (
                                <CurrencyItem
                                    key={index}
                                    title={data.ticker}
                                    currentValue={data.price}
                                    handleRemoveCurrency={() => {
                                      handleRemoveCurrency(index)
                                    }}
                                />
                          )
                        })}
                    </CurrencyListContainer>
                </Container>
            </Content>
        </Layout>
  )
}

export default App
