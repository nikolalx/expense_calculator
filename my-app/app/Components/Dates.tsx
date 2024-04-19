import { useState } from 'react';
import React from 'react'
import { TuiDateRangePicker } from 'nextjs-tui-date-range-picker';


const Dates = () => {

    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());

    const options = {
        language: 'en',
        usageStatistics: false,
        format: 'dd:MM:yy',
        selectableRangeStart: startDate,
        selectableRangeEnd: endDate,
    };

    const minute: number = 1000 * 60;
    const hour: number = minute * 60;
    const day: number = hour * 24;


    const calcDays: number = ((endDate.getTime() - startDate.getTime()) / day) + 0.1;

    const setter = (e: Array<Date>) => {
        setStartDate(e[0])
        setEndDate(e[1])
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

            <p>{`Weeks: ${Math.trunc(calcDays / 7)} Days: ${Math.round(calcDays % 7) === 7 ? 0 : Math.round(calcDays % 7)}`}</p>

            <p>{`${calcDays} calculated days`}</p>
            <p>{`${Math.floor(calcDays)} floored days`}</p>
            <p>{`Starting date: ${startDate}`}</p>
        </>
    )


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
}

export default Dates