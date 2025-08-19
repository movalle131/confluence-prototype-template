import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@atlaskit/css-reset'
import { setGlobalTheme } from '@atlaskit/tokens'
import { resolveFeatureFlags } from './utils/feature-flag.tsx'

// Enable ADS feature flags including Visual Refresh
resolveFeatureFlags()

// Set global theme
setGlobalTheme({ 
  colorMode: 'light'
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
