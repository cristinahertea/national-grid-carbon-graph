import React, { useState, useEffect } from 'react'
import * as DS from './DatePicker.styles'

export const DatePicker = ({ setDateRange }) => {
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 1)) // yesterday
  )
  const [endDate, setEndDate] = useState(new Date()) // today
  const [error, setError] = useState('')

  useEffect(() => {
    if (!startDate || !endDate)
      return setError('Please select both a Start and an End date')
    if (startDate > endDate)
      return setError('The Start date needs to be before the End date')
    return setError('')
  }, [startDate, endDate])

  const tranformDate = (date) => {
    const [base, minutes] = date.toISOString().split(':')
    return `${[base, minutes].join(':')}Z`
  }

  const handleClick = () => {
    setDateRange({
      startDate: tranformDate(startDate),
      endDate: tranformDate(endDate),
    })
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
        maxDate={new Date()}
        format={'dd/MM/yyyy hh:mm a'}
        disableClock
      />
      <DS.FetchButton onClick={() => handleClick()} disabled={error}>
        Fetch data
      </DS.FetchButton>
      {error && <DS.Error>{error}</DS.Error>}
    </DS.Wrapper>
  )
}
