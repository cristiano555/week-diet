import styled from 'styled-components'
import { autoSize } from '../../helpers/styles.js'
import {
    colors,
    fonts,
    fontsSizes,
    fontsWeights,
    mediaMobile,
    mainContainer
} from '../../helpers/styles.js'

export const InfoBoxElement = styled.div`
    width: 100%;
`

export const Title = styled.h3`
    font-family: ${fonts.HelveticaNeueRoman};
    font-size: ${fontsSizes.desktop.l1};
    font-weight: ${fontsWeights.medium};
    color: ${colors.mainText};
    margin: 15px 0;
`

export const Content = styled.p`
    font-family: ${fonts.Arial};
    font-size: ${fontsSizes.desktop.m1};
    font-weight: ${fontsWeights.medium};
    color: ${colors.mainText};
    line-height: 1.4;
`

export const Button = styled.a`
    height: 35px;
    width: auto;
    text-decoration: none;
    font-family: ${fonts.HelveticaNeue};
    font-size: ${fontsSizes.desktop.m2};
    font-weight: ${fontsWeights.medium};
    color: ${colors.mainText};
    border: 1px solid ${colors.mainText};
    border-radius: 5px;
`



