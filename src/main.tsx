import { ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import React from 'react'

import { client } from './lib/apollo'
import App from './App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
