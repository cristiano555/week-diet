import styled from 'styled-components'
import { autoSize } from '../../../helpers/styles.js'
import {
    colors,
    fonts,
    fontsSizes,
    fontsWeights,
    mediaMobile
} from '../../../helpers/styles.js'

export const ProteinOptionElement = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    justify-self: end;

    img{
        padding-left: 15px;
        cursor: pointer;
    }

    @media ${mediaMobile} {
        grid-column-start: 1;
        grid-column-end: 2;
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
`