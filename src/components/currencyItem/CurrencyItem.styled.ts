import styled from 'styled-components'
import { ReactComponent as Icon } from '../../assets/trophy-icon.svg'
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg'

export const Container = styled.div`
  padding: 0 60px 10px 0;
  margin-top: 30px;
  display: flex;
  max-width: 350px;
  align-items: center;
  border-bottom: 1px solid transparent;
  border-image: linear-gradient(0.25turn, #9B9999, transparent) 1;
`

export const TrophyIcon = styled(Icon)`
  margin-right: 30px;
`

export const CurrencyDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`

export const RemoveButton = styled(CloseIcon)`
  width: 14px;
  height: 14px;
  margin-left: auto;
  cursor: pointer;
`

export const StyledTicker = styled.span`
  font-family: "Lucida Grande", serif;
  color: #FFFFFF;
  font-size: 20px;
`

export const StyledValue = styled.span`
  font-family: "Lucida Grande", serif;
  color: #9B9999;
  font-size: 14px;
`
