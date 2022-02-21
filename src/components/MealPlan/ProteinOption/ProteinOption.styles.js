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

export const ProteinOptionElement = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;
    justify-self: end;

    img{
        padding-left: 15px;
        cursor: pointer;
    }

    img:nth-child(2){
        @media ${mediaMobile}{
            padding-left: 0;
        }
    }

    @media ${mediaTablet} {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 2;
        justify-self: start;
    }
    @media ${mediaMobile} {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 3;
        justify-self: start;
    }
`

export const Title = styled.p`
    font-family: ${fonts.HelveticaNeue};
    font-weight: ${fontsWeights.medium};
    font-size: ${fontsSizes.desktop.s};
    color: ${colors.additionalText2};
    text-transform: uppercase;
    text-align: left;
    padding-left: 15px;
    padding-bottom: 10px;

    @media ${mediaMobile}{
        padding-left: 0;
    }
`