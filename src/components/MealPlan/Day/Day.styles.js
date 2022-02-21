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

export const DayElement = styled.div`
    width: auto;
    position: relative;
    background-color: ${colors.additionalBackground};
    border-right: 2px solid ${colors.lightGray};

    .active{
        border: 3px solid ${colors.red}; 
    }

    .slick-prev{
        position: absolute;
        top: 30px;
        left: 30px;
    }
`

export const DayTitle = styled.h3`
    height: 50px;
    color: ${colors.red};
    font-size: ${fontsSizes.desktop.l};
    font-family: ${fonts.HelveticaNeue};
    font-weight: ${fontsWeights.medium};
    text-transform: uppercase;
    text-align: center;
    line-height: 50px;
    border-bottom: 2px solid ${colors.lightGray};
`

export const Meal = styled.div`
    height: 90px;
    padding: 10px 10px 10px 12px;
    font-size: ${fontsSizes.desktop.s2};
    font-family: ${fonts.HelveticaNeue};
    font-weight: ${fontsWeights.medium};
    color: ${colors.textInfoBox};
    text-align: left;
    line-height: 1.3;
    border-bottom: 2px solid ${colors.lightGray};
`

export const Carb = styled.div`
    height: 35px;
    font-size: ${fontsSizes.desktop.s2};
    font-family: ${fonts.HelveticaNeue};
    font-weight: ${fontsWeights.medium};
    color: ${colors.textInfoBox};
    text-align: center;
    text-transform: uppercase;
    line-height: 35px;
    border-bottom: 2px solid ${colors.lightGray};
    background-image: url(${BgPattern});
    background-repeat: repeat;
`

export const Workout = styled.div`
    height: 35px;
    margin: auto;
    background-image: url(${BgPattern});
    background-repeat: repeat;
`

export const WithoutMealDay = styled.div`
position: absolute;
top: 55%;
left: 50%;
height: 100%;
text-align: center;
transform: translate(-50%, -50%);
font-size: ${fontsSizes.desktop.l2};
font-family: ${fonts.HelveticaNeue};
font-weight: ${fontsWeights.normal};
color: ${colors.additionalText};
text-transform: uppercase;
writing-mode: vertical-rl; 
    img{
        display:inline-block;
        padding: 25px 0;
    }
    p{
        display:inline-block;
        transform: rotate(180deg);
    }
`





