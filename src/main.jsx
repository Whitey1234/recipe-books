import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
 
  RouterProvider,
} from "react-router";
import { router } from './Router/Router.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { DarkModeProvider } from '@rbnd/react-dark-mode';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      
<RouterProvider router={router} />
    </AuthProvider>
    
  </StrictMode>,
)
