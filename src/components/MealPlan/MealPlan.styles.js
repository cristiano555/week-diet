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

export const MealPlanElement = styled.div`
    width: ${mainContainer}px;
    margin: auto;
    padding: 0 23px;

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
    @media ${mediaMobile} {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
`

export const Schedule = styled.div`
    margin: 15px auto;
    display: grid;
    grid-template-columns: 85px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;

    div:last-child { 
        border-right: 0;
    }
`



