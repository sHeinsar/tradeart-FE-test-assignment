import React from 'react'
import Layout from '../../layouts/Layout'
import { Content, DescriptionContainer } from './App.styled'
import DescriptionBox from '../descriptionBox/DescriptionBox'

const App: React.FC = () => {
  return (
        <Layout>
            <Content>
                <DescriptionContainer>
                    <DescriptionBox/>
                    {}
                </DescriptionContainer>
            </Content>
        </Layout>
  )
}

export default App
