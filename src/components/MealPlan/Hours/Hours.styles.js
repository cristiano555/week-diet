import styled from 'styled-components'
import { autoSize } from '../../../helpers/styles.js'
import {
    colors,
    fonts,
    fontsSizes,
    fontsWeights,
    mediaMobile
} from '../../../helpers/styles.js'
import BgPattern from '../../../assets/images/bgpattern.png';

export const HoursElement = styled.div`
    width: auto;
    background-image: url(${BgPattern});
    background-repeat: repeat;
`

export const EmptyBlock = styled.div`
    height: ${(props)=> props.height}px;
    color: ${colors.red};
    font-size: ${fontsSizes.desktop.l};
    font-family: ${fonts.HelveticaNeue};
    font-weight: ${fontsWeights.medium};
    text-transform: uppercase;
    text-align: center;
    line-height: 50px;
    border-bottom: 2px solid ${colors.lightGray};
`

export const Hour = styled.div`
    height: 90px;
    line-height: 90px;
    text-align: center;
    font-size: ${fontsSizes.desktop.s2};
    font-family: ${fonts.HelveticaNeue};
    font-weight: ${fontsWeights.bold};
    color: ${colors.textInfoBox};
    border-bottom: 2px solid ${colors.lightGray};
    span{
        font-weight: ${fontsWeights.medium};
    }
`

export const Workout = styled.div`
    height: 35px;
    padding: 10px 10px 10px 12px;
    font-size: ${fontsSizes.desktop.s2};
    font-family: ${fonts.HelveticaNeue};
    font-weight: ${fontsWeights.medium};
    color: ${colors.textInfoBox};
    text-align: left;
    line-height: 1.3;
    border-bottom: 2px solid ${colors.lightGray};
`

