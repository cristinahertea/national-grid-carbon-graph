import React, { useState } from 'react'
import * as DS from './DatePicker.styles'

export const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  return (
    <DS.Wrapper>
      <DS.Label>Start Date</DS.Label>
      <DS.StyledDatePicker
        value={startDate}
        onChange={setStartDate}
        disableClock
      />
      <DS.Label>End Date</DS.Label>
      <DS.StyledDatePicker value={endDate} onChange={setEndDate} disableClock />
    </DS.Wrapper>
  )
}
