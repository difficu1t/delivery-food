import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import StoreProvider from './store/storeProvider.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <StoreProvider>
      <App /> 
    </StoreProvider>
  </React.StrictMode>,
)
