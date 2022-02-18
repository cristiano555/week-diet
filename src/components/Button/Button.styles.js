import styled from 'styled-components'
import { autoSize } from '../../helpers/styles.js'
import {
    colors,
    fonts,
    fontsSizes,
    fontsWeights,
    mediaMobile,
    mediaTablet
} from '../../helpers/styles.js'

export const ButtonLink = styled.a`
    text-decoration: none;
`

export const ButtonElement = styled.button`
    margin: 15px 10px 15px 0;
    width: auto;
    height: 35px;
    text-decoration: none;
    background-color: transparent;
    border: 1px solid ${colors.borderButton};
    border-radius: 5px;
    cursor: pointer;
    padding: 0 12px;

    @media ${mediaTablet}{
        margin: 15px 10px 5px 0;
    }

    @media ${mediaMobile}{
        margin: 15px 10px 20px 0;
    }
`

export const Icon = styled.img`
    display: inline-block;
`

export const ButtonText = styled.p`
    display: inline-block;
    font-family: ${fonts.HelveticaNeue};
    font-size: ${fontsSizes.desktop.m2};
    font-weight: ${fontsWeights.medium};
    color: ${colors.mainText};
    margin: 0 5px;
`

export const Arrow = styled.img`
    display: inline-block;
`




