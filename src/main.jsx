import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

import { HeroesApp } from './HeroesApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroesApp />
  </StrictMode>,
)
