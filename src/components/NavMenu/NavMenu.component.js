import React from 'react'
import images from '../../constants/images'
import { DatePicker } from '../DatePicker'

import config from './NavMenu.config'
import * as NS from './NavMenu.styles'

export const NavMenu = ({ selected, setSelected, setDateRange }) => {
  const { authorName, menuItems, githubLink } = config
  return (
    <NS.Wrapper>
      <NS.Logo src={images.Logo} alt='logo' />
      <NS.ButtonsList>
        {menuItems.map((el) => {
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
      <DatePicker setDateRange={setDateRange} />
      <NS.Copyright>
        Built by{' '}
        <NS.AuthorLink href={githubLink} target='_blank'>
          {authorName}
        </NS.AuthorLink>
      </NS.Copyright>
    </NS.Wrapper>
  )
}
