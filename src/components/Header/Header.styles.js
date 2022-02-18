import styled from 'styled-components'
import { autoSize } from '../../helpers/styles.js'
import {
    colors,
    fonts,
    fontsSizes,
    fontsWeights,
    mediaMobile,
    mediaTablet,
    mainContainer
} from '../../helpers/styles.js'
import UserPhoto from '../../assets/images/userphoto.png';
import DropDownArrow from '../../assets/images/dropdownarrow.png';

export const HeaderElement = styled.header`
    width: 100%;
    height: 79px;
    border-bottom: 1px solid ${colors.lightGray};
    background-color: ${colors.additionalBackground};
`

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 118px auto auto;
    grid-template-rows: 1fr;
    width: ${mainContainer}px;
    height: 100%;
    margin: auto;
    padding: 0 23px;

    @media ${mediaTablet} {
        width: 100%;
    }

    @media ${mediaMobile} {
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }
`

export const Logo = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
    border-right: 1px solid ${colors.lightGray};
    width: 118px;
`

export const MainMenu = styled.nav`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
    align-self: center;
    @media ${mediaMobile} {
        display: none;
    }

    li{
        display: inline-block;
        padding-left: 32px;
    }
    a{
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        color: ${colors.textHeader};
        font-family: ${fonts.HelveticaNeue};
        font-weight: ${fontsWeights.bold};
    }
    .active::before {
        content: "";
        position: absolute;
        display: block;
        width: 25px;
        height: 2px;
        bottom: -10px;
        left: 50%;
        background-color: ${colors.red};
        transform: translate(-50%, -50%);
    }
    a:hover{
        color: ${colors.red};
    }
`

export const UserMenu = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;
    align-self: center;
    justify-self: end;
    cursor: pointer;
    
    @media ${mediaMobile} {
        display: none;
    }
    p{
        font-family: ${fonts.HelveticaNeue};
        font-size: ${fontsSizes.desktop.m1};
        color: ${colors.mainText};
        font-weight: 600;
        position: relative;
        padding-right: 20px;
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

export const Hamburger = styled.img`
    display: none;
    @media ${mediaMobile} {
        display: block;
        grid-column-start: 2;
        grid-column-end: 3;
        justify-self: end;
        align-self: center;
        cursor: pointer;
        width: 30px;
    }
`



