import styled from 'styled-components'
import * as colors from '../../constants/colors'

export const Logo = styled.img`
  width: 90%;
  margin: 5%;
`

export const Wrapper = styled.div`
  background-color: ${colors.GREY};
  position: relative;
  display: grid;
  grid-template-rows: min-content min-content auto min-content;
`

export const ButtonsList = styled.div`
  border-top: 2px solid ${colors.LIGHT_GREY};
  color: white;
  padding: 40px 10px;
`

export const Button = styled.div`
  margin-bottom: 10px;
  text-align: right;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  transition: 300ms;
  padding-right: 20px;
  background: ${({ selected }) =>
    selected ? colors.BLUE_GRADIENT : colors.TRANSPARENT};
  color: ${colors.WHITE};
  user-select: none;

  &:hover {
    color: #333;
    background: ${colors.WHITE_GRADIENT};
  }
`

export const Copyright = styled.div`
  text-align: right;
  font-size: 18px;
  color: ${colors.WHITE};
  border-top: 2px solid ${colors.LIGHT_GREY};
  padding: 10px 20px;
`

export const AuthorLink = styled.a`
  color: ${colors.WHITE};
  cursor: pointer;
  font-weight: 600;
  text-decoration: underline;
  transition: 300ms;

  &:hover {
    color: ${colors.BLUE};
  }
`
