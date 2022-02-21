import styled from 'styled-components'
import { autoSize } from '../../../helpers/styles.js'
import {
    colors,
    fonts,
    fontsSizes,
    fontsWeights,
    mediaMobile,
    mediaTablet,
} from '../../../helpers/styles.js'

export const ProgressWeeksElement = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
    display: grid;
    grid-template-columns: 10px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px;
    grid-template-rows: 1fr 1fr 1fr;
    @media ${mediaTablet}{
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 2;
    }
    @media ${mediaMobile}{
        grid-column-start: 1;
        grid-column-end: 3;
    }
`

export const Title = styled.p`
    font-family: ${fonts.HelveticaNeue};
    font-weight: ${fontsWeights.medium};
    font-size: ${fontsSizes.desktop.s};
    color: ${colors.additionalText2};
    text-transform: uppercase;
    text-align: left;
    padding-bottom: 10px;
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 1;
    grid-row-end: 1;
`

export const Dot = styled.img`
    text-align: left;
    padding: 0;
    margin: 0;
    grid-row-start: 2;
    grid-row-end: 2;
`

export const Number = styled.div`
    font-family: ${fonts.HelveticaNeue};
    font-weight: ${fontsWeights.medium};
    font-size: ${fontsSizes.desktop.s};
    color: ${colors.additionalText2};
    text-transform: uppercase;
    text-align: right;
    padding-bottom: 10px;
    grid-row-start: 3;
    grid-row-end: 3;
    margin-top: 10px;
    width: 20px;
    
    @media ${mediaTablet}{
        margin-top: 0px;
        padding-bottom: 0px;
    }

    @media ${mediaMobile}{
        margin-bottom: 20px;
    }

    p:nth-child(1){
        width: 10px;
        text-align: left;
        padding-left: 4px;
    }
`