import React, { useState } from 'react'
import * as DS from './DatePicker.styles'

export const DatePicker = ({ setDateRange }) => {
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 1)) // yesterday
  )
  const [endDate, setEndDate] = useState(new Date()) // today

  const tranformDate = (date) => {
    const [base, minutes] = date?.toISOString().split(':')
    return `${[base, minutes].join(':')}Z`
  }

  const handleClick = () => {
    console.log('click')
    if (startDate && endDate) {
      setDateRange({
        startDate: tranformDate(startDate),
        endDate: tranformDate(endDate),
      })
    }
  }

  return (
    <DS.Wrapper>
      <DS.Label>Start Date</DS.Label>
      <DS.StyledDatePicker
        value={startDate}
        onChange={setStartDate}
        maxDate={endDate}
        format={'dd/MM/yyyy hh:mm a'}
        disableClock
      />
      <DS.Label>End Date</DS.Label>
      <DS.StyledDatePicker
        value={endDate}
        onChange={setEndDate}
        minDate={startDate}
        format={'dd/MM/yyyy hh:mm a'}
        disableClock
      />
      <DS.FetchButton
        onClick={() => handleClick()}
        disabled={!startDate || !endDate}
      >
        Fetch data
      </DS.FetchButton>
    </DS.Wrapper>
  )
}
