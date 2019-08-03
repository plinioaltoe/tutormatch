import styled from 'styled-components'
import { colors, metrics } from '~/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    border: none;
    background: ${colors.light};
    height: 40px;
    border-radius: ${metrics.baseRadius}px;
    width: 150px;
    font-family: 'Avenir', sans-serif;
    font-size: ${metrics.big}px;
    margin: ${metrics.baseMargin}px 0px ${metrics.baseMargin * 3}px;
  }
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`
