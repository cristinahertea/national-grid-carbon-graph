import React, { useState } from 'react'
import { NavMenu } from '../NavMenu'
import { Content } from '../Content'

import * as HS from './Home.styles'

export const Home = () => {
  const [selected, setSelected] = useState(1)
  const [dateRange, setDateRange] = useState(null)

  return (
    <HS.Wrapper>
      <NavMenu
        selected={selected}
        setSelected={setSelected}
        setDateRange={setDateRange}
      />
      <Content selected={selected} dateRange={dateRange}></Content>
    </HS.Wrapper>
  )
}
