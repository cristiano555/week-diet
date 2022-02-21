import styled from 'styled-components'
import {
    autoSize,
    colors,
    fonts,
    fontsSizes,
    fontsWeights,
    mediaMobile,
    mediaTablet,
    mainContainer
} from '../../helpers/styles.js'
import LeftArrowImg from "../../assets/images/leftarrow.png"
import RightArrowImg from "../../assets/images/rightarrow.png"

export const MealPlanElement = styled.div`
    width: ${mainContainer}px;
    margin: auto;
    padding: 0 23px;

    @media ${mediaTablet}{
        width: 100%;
    }
    @media ${mediaMobile}{
        width: 100%;
    }
`

export const MealPlanOptions = styled.div`
    margin: 32px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 45px;
    width: 100%;
    @media ${mediaTablet} {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
    }
`

export const ScheduleDesktop = styled.div`
    margin: 15px auto;
    display: grid;
    grid-template-columns: 85px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    @media ${mediaTablet} {
        display: none;
    }
    @media ${mediaMobile} {
        display: none;
    }
    div:last-child { 
        border-right: 0;
    }
`

export const ScheduleMobileTablet = styled.div`
    display: none;

    @media ${mediaTablet} {
        display: block;
        margin: 15px auto;
        display: grid;
        grid-template-columns: auto ${autoSize(700, 'tablet')};
        grid-template-rows: 1fr;
    }
    @media ${mediaMobile} {
        display: block;
        margin: 15px auto;
        display: grid;
        grid-template-columns: auto ${autoSize(480, 'mobile')};
        grid-template-rows: 1fr;
    }

    .slick-next:before{
        display: none;
    }
    
    .slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus{
        display: none;
    }
    .slick-prev{
        display: block;
        position: absolute;
        top: 4%;
        left: 32%;
        z-index: 5;
        width: 13px;
        height: 22px;
        cursor: pointer;
        border: 0;
        background-image: url("${LeftArrowImg}");
        background-size: cover;
    }

    .slick-next{
        display: block;
        position: absolute;
        top: 4%;
        left: 66%;
        z-index: 5;
        width: 13px;
        height: 22px;
        cursor: pointer;
        border: 0;
        background-image: url("${RightArrowImg}");
        background-size: cover;
    }
`

export const ArrowRight = styled.button`

`

export const ArrowLeft = styled.button`

`



