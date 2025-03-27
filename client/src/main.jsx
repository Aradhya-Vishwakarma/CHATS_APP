// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {CssBaseline} from '@mui/material'
import {HelmetProvider} from 'react-helmet-async'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <App />
    <CssBaseline />
    </HelmetProvider>
  </React.StrictMode>,
)
