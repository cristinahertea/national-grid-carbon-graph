import React, { useEffect, useState } from 'react'
import getIntensityByRange from '../../services/getIntensityByRange'

export const Content = ({ dateRange, selected }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (dateRange) {
      const url = `${dateRange?.startDate}/${dateRange?.endDate}`
      getIntensityByRange(url).then((res) =>
        res.payload ? setData(res.payload) : setError(res.error)
      )
    }
  }, [dateRange])

  return <div>{JSON.stringify(data)}</div>
}
