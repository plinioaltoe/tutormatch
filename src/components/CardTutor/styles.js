import styled from 'styled-components'
import { colors, metrics } from '~/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 250px;
  margin: 0px 0px 30px 0px;
`
export const ImgContainer = styled.div`
  padding: ${metrics.basePadding * 3}px 0px 0 0;
  display: flex;
  align-items: center;
  width: -webkit-fill-available;
  justify-content: center;
  border-top-left-radius: ${metrics.baseRadius}px;
  border-top-right-radius: ${metrics.baseRadius}px;
  img {
    width: 250px;
    border-top-left-radius: ${metrics.baseRadius}px;
    border-top-right-radius: ${metrics.baseRadius}px;
  }
`

export const GroupContainer = styled.div`
  background-color: ${colors.light};
  width: -webkit-fill-available;
  border-bottom-left-radius: ${metrics.baseRadius}px;
  border-bottom-right-radius: ${metrics.baseRadius}px;
`

export const Name = styled.div`
  padding: ${metrics.basePadding * 2}px ${metrics.basePadding}px 0;
  font-weight: 500;
  font-size: ${metrics.bigger}px;
`
export const Text = styled.div`
  font-size: ${metrics.small}px;
  padding: ${(metrics.basePadding * 3) / 2}px ${metrics.basePadding}px 0;
`
export const Chip = styled.div`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;

  margin: ${metrics.baseMargin / 4}px ${metrics.baseMargin / 2}px 0;
  font-size: ${metrics.smaller}px;
  height: 20px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const GroupStudents = styled.div`
  padding: ${metrics.basePadding / 2}px ${metrics.basePadding}px ${metrics.basePadding}px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
`

export const ImgStudent = styled.div`
  margin: 0 ${metrics.basePadding}px 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 32px;
  height: 32px;
  background: ${colors.lighter};
  border-radius: 50%;
  min-width: 32px;
  img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
`
