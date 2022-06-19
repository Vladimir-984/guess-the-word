import React from 'react'
import { RouterContext } from '@happysanta/router'
import { router } from 'router'

export const RouterProvider: React.FC = ({ children }) => {
   return <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
}
