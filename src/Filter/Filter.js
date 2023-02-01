import React, { useState } from 'react'

function Filter() {

    const [user, setUser] = useState({
        date: ""
    });

    const saveDate = (e) => {
        const data = e.target.date;
        const value = e.target.value;

        setUser({...user, [data]: value});
        console.log(user);
    }
    // const set = {date:""}


    return (
        <div>
            <div>
                <h1>Date Filter</h1>
            </div>
            <div className="input-container">
                <label>Date : </label>
                <input 
                type="date" 
                data="date" 
                value={user.data}
                onChange={saveDate}
                 required />
            </div>
            {/* <div>
                <input type="button">Click Here</input>
            </div> */}

            <div className="lable-year-button-container">
                <span className="year-lable">filter by year</span>
                <select>                    
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>
            </div>
            )
}

            export default Filter
