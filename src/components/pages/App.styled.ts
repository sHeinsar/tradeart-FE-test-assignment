import styled from 'styled-components'
import leprechaunImage from '../../assets/bitcasino-leprechaun-figure.png'
import { ReactComponent as bitCasinoLogo } from '../../assets/bitcasino-logo.svg'

export const Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  background: url(${leprechaunImage}) no-repeat;
  background-position-x: 40em;
  background-position-y: bottom;
  background-size: 650px;
  padding-bottom: 200px;
`

export const Container = styled.div`
  width: 100%;
  margin: 50px 0 25px 150px;
  @media screen and (max-width: 800px) {
    margin: 50px 20px 25px 20px;
  }
`

export const CurrencyListContainer = styled.div`
  margin-top: 20px;
`

export const StyledBitCasinoLogo = styled(bitCasinoLogo)`
`

export const ContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
`
