import React, { useState } from 'react'
import { NavMenu } from '../NavMenu'
import { Content } from '../Content'
import * as HS from './Home.styles'

export const Home = () => {
  const [dateRange, setDateRange] = useState(null)

  return (
    <HS.Wrapper>
      <NavMenu setDateRange={setDateRange} />
      <Content dateRange={dateRange}></Content>
    </HS.Wrapper>
  )
}
