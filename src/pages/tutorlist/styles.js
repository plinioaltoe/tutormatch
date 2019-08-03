import styled from 'styled-components'
import { colors, metrics } from '~/styles'

export const Container = styled.div``

export const Content = styled.div`
  padding: 0 ${metrics.basePadding * 5}px;
`

export const Linha = styled.hr`
  margin: ${metrics.baseMargin}px 0;
  border: 0;
  height: 0;
  border-top: 1px solid ${colors.darkTransparent};
  border-bottom: 1px solid ${colors.whiteTransparent};
`
