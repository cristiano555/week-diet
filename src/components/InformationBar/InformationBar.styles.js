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

export const InformationBarElement = styled.div`
    display: grid;
    grid-template-columns: 305px 368px 305px;
    grid-template-rows: 1fr;
    width: ${mainContainer}px;
    margin: 45px auto 15px auto;
    padding: 0 23px;

    div:nth-child(1) { 
        border-right: 1px solid  ${colors.lightGray};
        padding-right: 30px;
    }

    div:nth-child(2) { 
        border-right: 1px solid  ${colors.lightGray};
        padding-left: 50px;
        padding-right: 56px;
    }

    div:nth-child(3) { 
        padding-left: 40px;
    }

    @media ${mediaTablet} {
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        div:nth-child(1), div:nth-child(2), div:nth-child(3) { 
            padding-right: 15px;
            padding-left: 25px;
        }
    }

    @media ${mediaMobile} {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        width: 100%;

        div:nth-child(1), div:nth-child(2), div:nth-child(3) { 
            border-right: 0;
            padding-right: 0;
            padding-left: 0;
            border-bottom: 1px solid  ${colors.lightGray};
        }
    }
`



