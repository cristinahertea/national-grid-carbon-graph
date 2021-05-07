import React from 'react'

import * as LS from './LineChart.styles'
import * as colors from '../../constants/colors'

export const LineChart = ({ data }) => {
  const convertDateToLocaleString = (date) => {
    const [base, minutes] = new Date(date).toLocaleString().split(':')
    return [base, minutes].join(':')
  }

  const convertDataToChartFormat = (data) => {
    return data.map((el) => [
      convertDateToLocaleString(el.from),
      el.intensity.actual,
      el.intensity.forecast,
    ])
  }

  return (
    <LS.StyledChart
      width='100%'
      height='100%'
      chartType='AreaChart'
      data={[
        ['Range', 'Intensity: Actual', 'Intensity: Forecast'],
        ...convertDataToChartFormat(data),
      ]}
      options={{
        title: 'Carbon Intensity',
        titleTextStyle: { color: colors.BLUE },
        hAxis: {
          title: 'Date range covered',
          titleTextStyle: { color: colors.BLUE },
        },
        vAxis: { minValue: 0 },
        chartArea: { width: '60%', height: '70%' },
        lineWidth: 2,
        animation: {
          startup: true,
          easing: 'linear',
          duration: 500,
        },
      }}
    />
  )
}
