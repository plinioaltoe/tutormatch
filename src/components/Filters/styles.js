import styled, { css } from 'styled-components'
import { colors, metrics } from '~/styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: ${metrics.biggest}px;
  font-weight: 500;
  padding: ${metrics.basePadding * 6}px 0 ${metrics.basePadding}px 0;
`

export const SubTitle = styled.p`
  font-size: ${metrics.big}px;
  color: ${colors.dark};
  padding: 0 0 ${metrics.basePadding * 5}px 0;
`
export const Group = styled.div`
  margin: 0 ${metrics.baseMargin}px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`
export const Text = styled.div`
  padding: 0 ${metrics.basePadding}px;
  font-size: ${metrics.normal}px;
  font-weight: 400;
`
export const ButtonGroup = styled.div`
  margin: 0 ${metrics.baseMargin * 2}px 0 0;
`

export const ButtonCenter = styled.button`
  ${props => (props.selected
    ? css`
          background: ${colors.button};
          color: ${colors.white};
          font-weight: bold;
          border-color: ${colors.button};
        `
    : css`
          background: ${colors.regular};
          border-color: ${colors.medium};
        `)}

  font-family: 'Avenir', sans-serif;
  font-size: ${metrics.small}px;

  padding: ${metrics.smallPadding}px ${metrics.basePadding * 2}px;
`

export const ButtonLeft = styled(ButtonCenter)`
  border-top-left-radius: ${metrics.baseRadius}px;
  border-bottom-left-radius: ${metrics.baseRadius}px;
`

export const ButtonRight = styled(ButtonCenter)`
  border-top-right-radius: ${metrics.baseRadius}px;
  border-bottom-right-radius: ${metrics.baseRadius}px;
`
