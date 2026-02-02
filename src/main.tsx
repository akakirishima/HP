import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ReactGA from 'react-ga4'
import PageRouter from './components/PageRouter'
import AnalyticsTracker from './components/AnalyticsTracker'
import './index.css'

import { LanguageProvider } from './contexts/LanguageContext'

// Google Analytics Initialization
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID as string | undefined;
if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          {GA_MEASUREMENT_ID && <AnalyticsTracker />}
          <PageRouter />
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>
)
