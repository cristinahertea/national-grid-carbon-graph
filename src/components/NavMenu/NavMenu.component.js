import React, { useState } from 'react'
import images from '../../constants/images'
import { DatePicker } from '../DatePicker'
import config from './NavMenu.config'
import * as NS from './NavMenu.styles'

export const NavMenu = ({ setDateRange }) => {
  const [selected, setSelected] = useState(1)

  const { authorName, menuItems, githubLink } = config
  return (
    <NS.Wrapper>
      <NS.Logo src={images.Logo} alt='logo' />
      <NS.ButtonsList>
        {menuItems.map((el) => {
          const { id, label } = el
          return (
            <NS.NavButton
              key={id}
              selected={selected === id}
              onClick={() => setSelected(id)}
            >
              {label}
            </NS.NavButton>
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
