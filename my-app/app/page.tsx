"use client"
import { useState } from 'react';
import { TuiDateRangePicker } from 'nextjs-tui-date-range-picker';


// const [value, setValue] = useState([
//   new Date('2017-02-01 01:00:00'),
//   new Date('2017-02-02 14:00:00')
// ]);


export default function Home() {

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const options = {
    language: 'en',
    usageStatistics: false,
    format: 'dd:MM:yy',
    selectableRangeStart: startDate,
    selectableRangeEnd: endDate,
  };

  const calc = startDate.getTime() - endDate.getTime();

  const setter = (e:any) => {
    setStartDate(e[0])
    setEndDate(e[1])
    console.log(calc)
  }

  return (
  <>
    <TuiDateRangePicker
      handleChange={(e) => setter(e)}
      options={options}
      inputWidth={100}
      containerWidth={200}
      startpickerDate={startDate}
      endpickerDate={endDate}
    />

<p>{calc}</p>

    {/* // const div = document.querySelector('.rs-input-group > input').value
    // let result = div.replace(/.*~/, '').trim();
    // console.log(result)

    // Use this for calculating the weeks and days until the next pay

    // https://rsuitejs.com/components/date-range-picker/#appearance

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
    // console.log('Days:', days); */}


    </>
  );
}
