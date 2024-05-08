import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { AuthProvider } from './context/AuthProvider'
import { FormProvider } from './context/FormProvider'
import { FormCoursesProvider } from './context/FormCoursesContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FormProvider>
          <FormCoursesProvider>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
          </FormCoursesProvider>
        </FormProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
