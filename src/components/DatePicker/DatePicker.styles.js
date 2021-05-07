import styled from 'styled-components'
import DateTimePicker from 'react-datetime-picker'
import * as colors from '../../constants/colors'

export const StyledDatePicker = styled(DateTimePicker)`
  width: 260px;
  height: min-content;
  margin: 0 auto 20px auto;
  color: ${colors.WHITE};

  && input,
  select,
  svg {
    color: ${colors.WHITE};
    fill: ${colors.WHITE};
    stroke: ${colors.WHITE};
  }
  && option,
  abbr {
    color: ${colors.BLACK};
  }

  && > span > div {
    width: 260px;
  }
`

export const Label = styled.div`
  color: ${colors.WHITE};
  padding-bottom: 5px;
`

export const Wrapper = styled.div`
  height: min-content;
  border-top: 2px solid ${colors.LIGHT_GREY};
  padding: 40px 10px;
`

export const FetchButton = styled.div`
  cursor: pointer;
  width: 100%;
  text-align: center;
  color: ${colors.WHITE};
  border: thin solid ${colors.LIGHT_GREY};
  border-radius: 0px;
  padding: 10px 0;
  transition: 300ms;

  &:hover {
    color: ${colors.GREY};
    background: ${colors.WHITE};
  }
`
