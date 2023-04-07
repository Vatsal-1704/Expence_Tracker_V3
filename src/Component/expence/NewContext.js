import React, { createContext, useContext, useState } from 'react'
 //import "F:/IDP/React Js/Expense-Tracker/GH-Expence-Tracker/expence-tracker/src/App"
// import Extra from '../../Extra'

// debugger
const context01 = createContext()
export const NewContextProvider = ({ children }) => {
  const expenseDetails = [];
  const [newExpenseDatails, setNewExpenseDetails] = useState(expenseDetails);
  
  const formHandler = (FormData) => {
    setNewExpenseDetails([{ ...FormData }, ...newExpenseDatails])
  };
  return (
    (<context01.Provider value={{ formHandler, newExpenseDatails }}>  {children}</context01.Provider>)
  )
}
export const useNew = () => {
  return useContext(context01)
}
