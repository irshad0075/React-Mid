import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './context/addtoCart/context.jsx';


// export const GlobalContext = createContext("Initial Value")
// const contextData = {
//   username : "Usama Usman"
// }

ReactDOM.createRoot(document.getElementById('root')).render(

  // <GlobalContext.Provider value={{contextData}}>
  <CartContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </CartContextProvider>

  // </GlobalContext.Provider>
  ,
)
