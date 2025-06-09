import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import AppRouter from './routers/AppRouter.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Bounce, Slide, ToastContainer } from "react-toastify";
import AuthContextProvider from './auth/AuthProvider.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
        <ToastContainer
          position='top-center'
          autoClose={2000}
          hideProgressBar={false}
          theme='dark'
          transition={Bounce} // Bounce, Slide, Zoom, Flip
        />
      </QueryClientProvider>
    </AuthContextProvider>
  </StrictMode>,
)
