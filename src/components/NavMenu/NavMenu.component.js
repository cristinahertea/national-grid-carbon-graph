import React from 'react'
import images from '../../constants/images'
import { DatePicker } from '../DatePicker'

import config from './NavMenu.config'
import * as NS from './NavMenu.styles'

export const NavMenu = ({ selected, setSelected }) => {
  return (
    <NS.Wrapper>
      <NS.Logo src={images.Logo} alt='logo' />
      <NS.ButtonsList>
        {config.map((el) => {
          return (
            <NS.Button
              key={el.id}
              selected={selected === el.id}
              onClick={() => setSelected(el.id)}
            >
              {el.label}
            </NS.Button>
          )
        })}
      </NS.ButtonsList>
      <DatePicker />
      <NS.Copyright>
        Built by{' '}
        <NS.AuthorLink
          href={'https://github.com/cristinahertea/national-grid-carbon-graph'}
          target='_blank'
        >
          Cristina Hertea
        </NS.AuthorLink>
      </NS.Copyright>
    </NS.Wrapper>
  )
}
