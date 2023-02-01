import MonthBar from "./month-bar/MonthBar";
import "./YearBudgetSummary.css";
import React, { useState } from "react";
// import moment from 'moment';
// import Calender from "../expensebar/calender/Calender";
import { useNew } from "../NewContext";

//this component renders the bar chart
function YearBudgetSummary(props) {

  //this function needs to re-run whenever a year is selected through filter
  const [selectedYear, setSeletedYear] = useState(props.selectedYear);
  const abc = useNew();
  console.log(abc);


  //   const MakeItem = function(X) {
  //     return <option>{X}</option>
  // }
  const monthArray = [
    "jan",
    "feb",
    "mar",
    "april",
    "may",
    "june",
    "july",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  // function is defined in app.js and called here
  const monthSumArray = props.getAmtSumMonth(
    props.expense,
    Number(props.selectedYear)
  );
  // console.log(monthSumArray);

  // const newEx =props.onSaveForm(

  // );
  // console.log(newEx);

  // //find max value
  const maxValue = Math.max(...monthSumArray);
  // //normalization
  const monthBarHeightArray = monthSumArray.map((ele, index) => ({
    month: monthArray[index],
    barfill: maxValue !== 0 ? (ele / maxValue) * 4 + "rem" : "0rem",
  }));

  //send the selected year to parent
  const yearSelectionHandler = (event) => {
    setSeletedYear(event.target.value);
    props.onSelectedYear(event.target.value);
  };


  return (
    <div className="year-budget-summary-container">
      <div className="lable-year-button-container">
        <span className="year-lable">filter by year</span>

        <select
          className="year-select-button"
          value={props.selectedYear}
          onChange={yearSelectionHandler}
        >
          {
            // abc.newExpenseDatails.map((x,y) => <option key={y}>{x.date}</option>)
            // abc.newExpenseDatails.map(MakeItem)
            abc.newExpenseDatails.map(
              (val) => {
                return (
                  <option >{val}</option>,
                  console.log("done")
                )
              }
            )
          }

          {
            [...(props?.expense || []).map(({ date }) => ((new Date(date).getFullYear()))), (new Date()).getFullYear()].reduce((acc, cur) => { return acc.includes(cur) ? acc : [...acc, cur] }, []).map((year) => <option value={year}>{year}</option>)
          }

          {/* <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option> */}
        </select>
      </div>
      <div className="filter-by-year-container">
        {monthBarHeightArray.map((ele, index) => (
          <MonthBar
            key={index}
            month={ele.month}
            barfill={ele.barfill}
          ></MonthBar>
        ))}
      </div>
    </div>
  );
}

export default YearBudgetSummary;
