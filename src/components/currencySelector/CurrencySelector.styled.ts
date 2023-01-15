import styled from 'styled-components'

interface InputProps {
  hasError: boolean
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
    margin-top: 20px;
    right: 0;
    top: 0;
  }
`

export const InputContainer = styled.div`
  position: relative;
`

export const StyledInput = styled.input<InputProps>`
  text-transform: uppercase;
  width: 300px;
  height: 40px;
  border: ${props => props.hasError ? '1px solid red' : '1px solid #9B9999'};
  border-radius: 5px;
  padding-left: 15px;
`

export const StyledInputText = styled.div<InputProps>`
  padding: 0 5px;
  position: absolute;
  background: #FFFFFF;
  left: 10px;
  top: -7px;
  font-size: 10px;
  font-family: "Kohinoor Devanagari", serif;
  text-transform: uppercase;
  color: ${props => props.hasError ? 'red' : '#9B9999'};
`

export const StyledButton = styled.button`
  cursor: pointer;
  margin-top: 15px;
  width: 300px;
  border: 0;
  border-radius: 18px;
  min-height: 40px;
  background: #FF3C00;
  color: #FFFFFF;
`

export const StyledTermsAndConditions = styled.span`
  margin-top: 50px;
  text-align: center;
  max-width: 325px;
  font-size: 14px;
  font-family: "Kohinoor Devanagari", serif;
  color: #9B9999;
`