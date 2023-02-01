import React, { useState } from 'react'
import Expenses from './Component/expence/Expenses';
import Form from './Component/form/Form';

function Extra() {
      
    //initial static input expenses
const expenseDetails = [];

    //app needs to be re-evaluated whenever new expense is added, thus we declare a state variable for expense 
  const [newExpenseDatails, setNewExpenseDetails] = useState(expenseDetails);
  console.log(newExpenseDatails);
  console.log(newExpenseDatails.map(({date})=>(new Date(date)).getFullYear()));

  //this function is defined here but its called in form component that is form.js, whenever a user submit form, a handler function is triggred which inturn call this function and sends newly added data
  const formHandler = (FormData) => {
    setNewExpenseDetails([FormData, ...newExpenseDatails])
    console.log(setNewExpenseDetails);
  };

  //filter expense detail for a given year
  function expenseDetailsOfGivenYear(year,expense) {
    return expense.filter(element=>element.date.getFullYear()===year)
  }
  
  //add amount for given month
  function addAmount(month,array) {
   return array.reduce((acc, ele) => ele.date.getMonth()===month ? acc + ele.amount: acc, 0);
  }

  //compute amount for all the month and store in a array
  //this function is called in yearBudgetSummary as the return value of this function is required there
  function result(expense, selectedYear) {
    let monthAmountArray=[]
    for (let month = 0; month < 12; month++){
      monthAmountArray.push(addAmount(month, expenseDetailsOfGivenYear(selectedYear,expense)));
    }
    return monthAmountArray;
  }

  return (
    <div>
      <Form onSaveForm={formHandler}></Form>
      <Expenses
        expenseDetails={newExpenseDatails}
        getAmtSumOfMonth={result}
      ></Expenses>
    </div>
  )
}

export default Extra
