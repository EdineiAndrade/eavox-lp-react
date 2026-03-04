import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "@n8n/chat/dist/style.css"; // CSS do widget :contentReference[oaicite:1]{index=1}
import "./n8n-chat-theme.css"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)