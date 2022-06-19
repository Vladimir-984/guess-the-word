import { Provider } from 'react-redux'
import { store } from 'store'
// import { StoreContext } from './StoreContext'

export const StoreProvider: React.FC = ({ children }) => {
   return <Provider store={store}>{children}</Provider>
   // return <StoreContext.Provider value={1}>{children}</StoreContext.Provider>
}
