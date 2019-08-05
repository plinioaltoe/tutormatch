import styled from 'styled-components'
import { colors, metrics } from '~/styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.lighter};
`

export const FirstBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: -webkit-fill-available;
  padding: ${metrics.basePadding * 2}px;
  width: 100%;
`
export const RigthContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  align-items: center;
  font-size: ${metrics.normal}px;
  button {
    background: none;
    height: 32px;
    border-radius: ${metrics.baseRadius}px;
    width: 80px;
    font-family: 'Avenir', sans-serif;
    font-size: ${metrics.small}px;
    border: 1px solid ${colors.dark};
  }
`
export const SecondBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${metrics.basePadding * 10}px;

  button {
    background: ${colors.button};
    border-radius: ${metrics.baseRadius}px;
    font-family: 'Avenir', sans-serif;
    font-size: ${metrics.big}px;
    font-weight: bold;
    padding: ${metrics.basePadding}px ${metrics.basePadding * 2}px;
    color: ${colors.white};
  }
`
export const Title = styled.p`
  font-size: ${metrics.title}px;
  font-weight: bold;
  padding: ${metrics.basePadding}px;
`

export const SubTitle = styled.p`
  font-size: ${metrics.big}px;
  color: ${colors.darker};
  padding: 0 0 ${metrics.basePadding * 4}px 0;
`
