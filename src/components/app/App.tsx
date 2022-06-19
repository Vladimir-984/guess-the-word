import React from 'react'
import { AppContent } from './AppContent'
import { AppProvider } from './AppProvider'

export const App: React.FC = () => {
   return (
      <React.StrictMode>
         <AppProvider>
            <AppContent />
         </AppProvider>
      </React.StrictMode>
   )
}
