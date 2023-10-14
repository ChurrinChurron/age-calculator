import './App.css'
import Arrow from "./assets/icon-arrow.svg";

function App() {

  let day = document.getElementById("day");
  let month = document.getElementById("month");
  let year = document.getElementById("year");
  let errorMsg = document.querySelectorAll(".errorMsg");
  let input = document.querySelectorAll("input");
  let label = document.querySelectorAll("label");
  let resultDay = document.getElementById("totalDays");
  let resultMonth = document.getElementById("totalMonths");
  let resultYear = document.getElementById("totalYears");
  let date = new Date();
  let currentDay = date.getDate();
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear();

  function calcAge(e) {

    e.preventDefault();

    if(day.value === "" && month.value === "" && year.value === "") {

      input.forEach(ipt => {

        ipt.style.border = "1px solid var(--red)";
      })

      errorMsg.forEach(msg => {

        msg.innerText = "This field is required";
      })

      label.forEach(lab => {

        lab.style.color = "var(--red)";
      })

    } else if (day.value > 31) {

      input.forEach(ipt => {

        ipt.style.border = "1px solid var(--red)";
      })

      label.forEach(lab => {

        lab.style.color = "var(--red)";
      })

      for(let i = 0; i < errorMsg.length; i++) {

        errorMsg[0].innerText = "Must be a valid day"
        errorMsg[1].innerText = "";
        errorMsg[2].innerText = "";
    }


    } else if(month.value > 12) {

      input.forEach(ipt => {

        ipt.style.border = "1px solid var(--red)";
      })

      label.forEach(lab => {

        lab.style.color = "var(--red)";
      })

      for(let i = 0; i < errorMsg.length; i++) {

        errorMsg[0].innerText = "";
        errorMsg[1].innerText = "Must be a valid month"
        errorMsg[2].innerText = "";
    }


    } else if(year.value > currentYear) {

      input.forEach(ipt => {

        ipt.style.border = "1px solid var(--red)";
      })

      label.forEach(lab => {

        lab.style.color = "var(--red)";
      })

      for(let i = 0; i < errorMsg.length; i++) {

        errorMsg[0].innerText = "";
        errorMsg[1].innerText = "";
        errorMsg[2].innerText = "Must be in the past"
    }

    } else {
      
      input.forEach(ipt => {

        ipt.style.border = "1px solid var(--gray)";
      })

      errorMsg.forEach(msg => {

        msg.innerText = "";
      })

      label.forEach(lab => {

        lab.style.color = "var(--dark-gray)";
      })

      if (month.value >= currentMonth || (day.value > currentDay && month.value >= currentMonth)) {

        resultYear.innerText = currentYear - year.value - 1;
      } else {

        resultYear.innerText = currentYear - year.value;
      }

      if (month.value > currentMonth) {

        resultMonth.innerText = 12 + currentMonth - month.value;

      } else {

        resultMonth.innerText = currentMonth - month.value;
      }

      if (day.value > currentDay) {

        resultDay.innerText = 31 + currentDay - day.value;
        
      } else {

        resultDay.innerText = currentDay - day.value;
      }
      
    }
  }

  return (
    <div className='box'>
      <div className='box__input'>
        <label htmlFor="day">
          Day
          <input type="number" name="age" id="day" placeholder='DD' />
          <span className='errorMsg'></span>
        </label>
        <label htmlFor="month">
          Month
          <input type="number" name="age" id="month" placeholder='MM' />
          <span className='errorMsg'></span>
        </label>
        <label htmlFor="year">
          Year
          <input type="number" name="age" id="year" placeholder='YYYY' />
          <span className='errorMsg'></span>
        </label>
      </div>
      <div className='box__btn'>
        <hr />
        <button onClick={calcAge}><img src={Arrow} alt="arrow" /></button>
      </div>
      <div className='box__results'>
        <h2><span id='totalYears'>--</span> years</h2>
        <h2><span id='totalMonths'>--</span> months</h2>
        <h2><span id='totalDays'>--</span> days</h2>
      </div>
    </div>
  )
}

export default App
