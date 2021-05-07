import styled from 'styled-components'
import * as colors from '../../constants/colors'

export const InnerCircle = styled.div`
  margin: auto;
  width: 150px;
  height: 150px;
  border-bottom: 20px solid ${colors.WHITE};
  border-top: 20px solid ${colors.WHITE};
  border-left: 20px solid ${colors.WHITE};
  border-right: 20px dashed ${colors.BLUE};
  border-radius: 50%;
  animation-name: spin;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const Wrapper = styled.div`
  background-color: ${colors.ALPHA_GREY};
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
`
