import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ParticipantsProvider from './context/ParticipantsContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ParticipantsProvider>
      <App />
    </ParticipantsProvider>
  </React.StrictMode>,
)
