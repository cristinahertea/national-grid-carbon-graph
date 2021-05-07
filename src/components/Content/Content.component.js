import React, { useEffect, useState } from 'react'
import { Spinner } from '../Spinner'
import getIntensityService from '../../services/getIntensityAPI'
import * as CS from './Content.styles'

export const Content = ({ dateRange }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(
    'Please click the Fetch Data button to start!'
  )

  const getData = async (url) => {
    const response = await getIntensityService(url)
    setIsLoading(false)
    if (response.payload) return setData(response.payload)
    if (response.error) return setError(response.error)
    return setError('Woops! Something went wrong!')
  }

  useEffect(() => {
    if (dateRange) {
      const url = `${dateRange?.startDate}/${dateRange?.endDate}`
      setError('')
      setIsLoading(true)
      getData(url)
    }
  }, [dateRange])

  return (
    <CS.Wrapper>
      {isLoading && <Spinner />}
      {error && <CS.Error>{error}</CS.Error>}
      {/* {data && JSON.stringify(data)} */}
    </CS.Wrapper>
  )
}
