import "./App.css";
import 'rsuite/dist/rsuite.min.css';
import { DateRangePicker } from 'rsuite';

const div = document.querySelector('.rs-input-group > input').value
let result = div.replace(/.*~/, '').trim();
console.log(result)

// Use this for calculating the weeks and days until the next pay

// function weeksAndDaysBetweenDates(date1, date2) {
//     const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    
//     // Parsing date strings into date objects
//     const firstDateParts = date1.split(':').map(part => parseInt(part, 10));
//     const secondDateParts = date2.split(':').map(part => parseInt(part, 10));

//     // Constructing Date objects
//     const firstDate = new Date(firstDateParts[2], firstDateParts[1] - 1, firstDateParts[0]);
//     const secondDate = new Date(secondDateParts[2], secondDateParts[1] - 1, secondDateParts[0]);

//     // Convert both dates to milliseconds
//     const firstDate_ms = firstDate.getTime();
//     const secondDate_ms = secondDate.getTime();

//     // Calculate the difference in milliseconds
//     const difference_ms = Math.abs(firstDate_ms - secondDate_ms);

//     // Convert back to days
//     const differenceDays = Math.round(difference_ms / oneDay);

//     // Calculate weeks and remaining days
//     const weeks = Math.floor(differenceDays / 7);
//     const remainingDays = differenceDays % 7;

//     return {
//         weeks: weeks,
//         days: remainingDays
//     };
// }

// // Example usage:
// const startDate = '01:04:24';
// const endDate = '20:04:24';
// const { weeks, days } = weeksAndDaysBetweenDates(startDate, result);
// console.log('Weeks:', weeks);
// console.log('Days:', days);


function App() {
  return (
    <form>
      <DateRangePicker size="lg" appearance="subtle" showHeader={false} format="dd:MM:yy" />
    </form>
  );
}

export default App;
