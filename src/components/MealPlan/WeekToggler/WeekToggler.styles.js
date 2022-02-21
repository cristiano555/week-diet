import styled from 'styled-components'
import {
    autoSize,
    colors,
    fonts,
    fontsSizes,
    fontsWeights,
    mediaMobile,
    mediaTablet
} from '../../../helpers/styles.js'
import LeftArrowImg from "../../../assets/images/leftarrow.png"
import RightArrowImg from "../../../assets/images/rightarrow.png"

export const WeekTogglerElement = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
    @media ${mediaTablet} {
        grid-column-start: 1;
        grid-column-end: 3;
        text-align: center;
        margin-bottom: 30px;
    }
`

export const LeftArrow = styled.button`
    margin: auto 40px auto 0;
    width: 26px;
    height: 44px;
    cursor: pointer;
    display: inline-block;
    border: 0;
    background-image: url("${LeftArrowImg}");

    @media ${mediaTablet} {
        margin: auto ${autoSize(25, 'tablet')} auto 0;
    }
`

export const Title = styled.p`
    font-family: ${fonts.HelveticaNeue};
    font-size: ${fontsSizes.desktop.l3};
    color: ${colors.red};
    text-align: center;
    display: inline-block;
    width: 190px;
    @media ${mediaTablet} {
        width: ${autoSize(300, 'tablet')};
    }
    @media ${mediaMobile} {
        width: ${autoSize(450, 'mobile')};
    }
`

export const RightArrow = styled.button`
    margin: auto 0 auto 40px;
    width: 26px;
    height: 44px;
    cursor: pointer;
    display: inline-block;
    border: 0;
    background-image: url("${RightArrowImg}");

    @media ${mediaTablet} {
        margin: auto 0 auto ${autoSize(25, 'tablet')} ;
    }
`