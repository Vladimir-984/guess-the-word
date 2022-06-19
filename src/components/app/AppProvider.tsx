import React from 'react'
import { RouterProvider } from 'router/RouterProvider'
import { StoreProvider } from 'store/StoreProvider'
import { Layout } from './Layout'
import { VKUIProvider } from './VKUIProvider'

export const AppProvider: React.FC = ({ children }) => {
   return (
      <RouterProvider>
         <StoreProvider>
            <VKUIProvider>
               <Layout>{children}</Layout>
            </VKUIProvider>
         </StoreProvider>
      </RouterProvider>
   )
}
