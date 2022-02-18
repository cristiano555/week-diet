import styled from 'styled-components'
import { autoSize } from '../../../helpers/styles.js'
import {
    colors,
    fonts,
    fontsSizes,
    fontsWeights,
    mediaMobile,
    mainContainer
} from '../../../helpers/styles.js'
import UserPhoto from '../../../assets/images/userphoto.png';
import DropDownArrow from '../../../assets/images/dropdownarrow.png';

export const MenuWrapper = styled.ul`
    display: none;
    @media ${mediaMobile} {
        list-style-type: none;
        display: block;
        z-index: 2;
        width: 100%;
        position: absolute;
        background-color: ${colors.additionalBackground};
        border-bottom: 2px solid ${colors.lightGray};
        top: 78px;
    }
`

export const Position = styled.li`
    width: 100%;
    cursor: pointer;
    text-transform: uppercase;
    a{
        border-top: 1px solid ${colors.lightGray};
        display: block;
        width: 100%;
        text-decoration: none;
        color: ${colors.mainText};
        font-family: ${fonts.HelveticaNeue};
        font-size: ${fontsSizes.mobile.xl};
        padding: ${autoSize(30, 'mobile')} ${autoSize(20, 'mobile')} ${autoSize(30, 'mobile')} ${autoSize(130, 'mobile')};
    }

    p{ 
        font-family: ${fonts.HelveticaNeue};
        font-size: ${fontsSizes.desktop.m1};
        color: ${colors.mainText};
        text-transform: capitalize;
        font-weight: 600;
        position: relative;
        margin-left: 42px;
    }

    p::before{
        content:url(${UserPhoto});
        position:absolute;
        top: -8px;
        left: -44px;
    }
    p::after{
        content:url(${DropDownArrow});
        position:absolute;
        top: -2px;
        right: 0;
    }
`
