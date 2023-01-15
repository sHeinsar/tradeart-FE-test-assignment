import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  flex: 0 1 150px;
  justify-content: center;
  padding: 0 150px;
  background: #FFFFFF;
  align-items: center;
  @media screen and (max-width: 800px) {
    padding: 30px 50px;
  }
`

export const StyledFooterText = styled.span`
  margin-top: 60px;
  margin-bottom: 20px;
  min-width: 400px;
  text-align: center;
  font-family: Didot,serif;
  color: #9B9999;
  @media screen and (max-width: 800px) {
    margin: 0;
  }
`