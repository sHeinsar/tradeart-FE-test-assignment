import styled from 'styled-components'
import { ReactComponent as loadingIcon } from '../../assets/loading.svg'

interface Props {
  hasError?: boolean
  disabledStyle?: boolean
}

export const Container = styled.div`
  position: relative;
  right: 120px;
  top: 60px;
  border-radius: 5px;
  padding-inline: 20px;
  width: 450px;
  height: 250px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1200px) { 
    width: 375px;
    margin-top: 20px;
    right: 0;
    top: 0;
  }
`

export const InputContainer = styled.div`
  position: relative;
`

export const StyledInput = styled.input<Props>`
  text-transform: uppercase;
  width: 300px;
  height: 40px;
  border: ${props => props.hasError ? '1px solid red' : '1px solid #9B9999'};
  border-radius: 5px;
  padding-left: 15px;
`

export const StyledInputText = styled.div<Props>`
  padding: 0 5px;
  position: absolute;
  left: 10px;
  top: -7px;
  background: #FFFFFF;
  font-size: 10px;
  font-family: "Kohinoor Devanagari", serif;
  text-transform: uppercase;
  color: ${props => props.hasError ? 'red' : '#9B9999'};
`

export const StyledButton = styled.button<Props>`
  cursor: ${props => props.disabledStyle ? '' : 'pointer'};
  margin-top: 15px;
  width: 300px;
  border: 0;
  border-radius: 18px;
  min-height: 40px;
  background: ${props => props.disabledStyle ? '#9B9999' : '#FF5111'};
  color: #FFFFFF;
  &:hover {
    background: ${props => props.disabledStyle ? '#9B9999' : '#ff5a5a'};
  }
`

export const StyledTermsAndConditions = styled.span`
  margin-top: 50px;
  text-align: center;
  max-width: 325px;
  font-size: 14px;
  font-family: "Kohinoor Devanagari", serif;
  color: #9B9999;
`

export const LoadingIcon = styled(loadingIcon)`
  background: #FFFFFF;
  position: absolute;
  left: 10px;
  top: -9px;
  height: 20px;
  width: 20px;
`
