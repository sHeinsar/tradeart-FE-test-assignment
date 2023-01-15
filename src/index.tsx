import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/pages/App'
import GlobalStyle from './styles/global'
import { ApolloProvider } from '@apollo/client'
import { client } from './client/apolloClient'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
    <ApolloProvider client={client}>
        <GlobalStyle />
        <App/>
    </ApolloProvider>
)
