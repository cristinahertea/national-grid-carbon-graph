import React, { useEffect, useState } from 'react'
import { Spinner } from '../Spinner'
import { LineChart } from '../LineChart'
import getIntensityService from '../../services/getIntensityAPI'
import * as CS from './Content.styles'

export const Content = ({ dateRange }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(
    'Please click the Fetch Data button to start!'
  )

  const getData = async (url) => {
    const response = await getIntensityService(url)
    setIsLoading(false)
    try {
      if (response.data.length > 0) return setData(response.data)
      if (response.data.length < 1) return setError('No data to display.')
      if (response.error) return setError(response.error)
    } catch (e) {
      return setError('Woops! Something went wrong!')
    }
  }

  useEffect(() => {
    if (dateRange) {
      const url = `${dateRange?.startDate}/${dateRange?.endDate}`
      setError('')
      setData([])
      setIsLoading(true)
      getData(url)
    }
  }, [dateRange])

  return (
    <CS.Wrapper>
      {isLoading && <Spinner />}
      {error && <CS.Error>{error}</CS.Error>}
      {data.length > 0 && <LineChart data={data} />}
    </CS.Wrapper>
  )
}
