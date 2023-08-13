import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { MoviesProvider } from './movie.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <MoviesProvider>
    <Router>
      <App />
    </Router>
  </MoviesProvider>
  // </React.StrictMode>,
)
