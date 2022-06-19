import React from 'react'

export const StoreContext = React.createContext<number>(1)

export const useStore = () => {
   const store = React.useContext(StoreContext)
   if (store === undefined || store === null) throw new Error('Использование вне контекста')
   return store
}
