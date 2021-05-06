import styled from 'styled-components'

export const Logo = styled.img`
  width: 90%;
  margin: 5%;
`

export const Wrapper = styled.div`
  background-color: #333;
  position: relative;
  display: grid;
  grid-template-rows: min-content auto 50px;
`

export const ButtonsList = styled.div`
  border-top: 2px solid white;
  color: white;
  padding: 40px 10px 10px 10px;
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
    selected
      ? 'linear-gradient(-145deg, orange 50%, transparent 80%)'
      : 'transparent'};
  color: white;

  &:hover {
    color: #333;
    background: linear-gradient(-145deg, white 50%, transparent 80%);
  }
`

export const Copyright = styled.div`
  text-align: center;
  font-size: 18px;
  color: white;
  border-top: 2px solid white;
  padding-top: 10px;
`

export const AuthorLink = styled.a`
  color: white;
  cursor: pointer;
  font-weight: 700;
  text-decoration: underline;
  transition: 300ms;

  &:hover {
    color: orange;
  }
`
