import React from 'react'
import ReactDOM from 'react-dom/client'
import PageRouter from './conponents/PageRouter'
import './index.css'

import { LanguageProvider } from './contexts/LanguageContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <PageRouter />
    </LanguageProvider>
  </React.StrictMode>
)
