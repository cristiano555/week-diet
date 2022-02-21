import { createGlobalStyle } from 'styled-components'
import "../assets/fonts/HelveticaNeueLTStd-Bd.woff2"
import "../assets/fonts/HelveticaNeueLTStd-Roman.otf"

// declare module "*.woff2"

/**
* functions
*/
export const autoSize = (size, device) => {
    if (device === 'mobile') {
        return `${(size * 100) / breakpointMobile}vw`
    } else if (device === 'tablet') {
        return `${(size * 100) / breakpointTablet}vw`
    } else {
        return `${(size * 100) / theWidestResolution}vw`
    }
}

/**
* variables
*/
export const breakpointMobile = 756
export const breakpointTablet = 1024
export const theWidestResolution = 1024
export const mediaMobile = `(max-width: ${breakpointMobile}px)`
export const mediaTablet = `(max-width: ${breakpointTablet}px)`
export const mainContainer = 1024

export const colors = {
    mainBackground: '#f9f9f9',
    additionalBackground: "#FFFFFF",
    borderButton: '#828282',
    textHeader: '#7c7c7c',
    mainText: '#828282',
    additionalText: "#c2c2c2",
    additionalText2: "#bdbdbd",
    black: "#000",
    lightGray: '#e1e1e1',
    red: '#ff801a',
}

export const fonts = {
    HelveticaNeue: `'HelveticaNeue', sans-serif`,
    HelveticaNeueRoman: `'HelveticaNeueRoman', sans-serif`,
    Arial: `Arial`,
}

export const fontsSizes = {
    mobile: {
        // xxl: '8.79vw', //90px
        // xl: '7.62vw', //78px
        // l: '5.47vw', //56px
        // m: '3.71vw', //38px
        // s: '3.13vw', //32px
        // xs: '2.73vw', //28px
    },
    desktop: {
        l3: "48px",
        l2: "35px",
        l1: "28px",
        l: "24px",
        m3: "18px",
        m2: "16px", 
        m1: "15px", 
        m: "14px",   
        s2: "13px",
        s1: "11px", 
        s: "9px"
    },
}

export const fontsWeights = {
    normal: "400",
    medium: "500",
    bold: "700",
}

/**
* global styles
*/
const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body{
        background-color: ${colors.mainBackground};
    }

    .slick-prev:before, .slick-next:before {
        display: none;
    }
 
    @font-face {
        font-family: "HelveticaNeue";
        src: url("../assets/fonts/HelveticaNeueLTStd-Bd") format("truetype");
    }

    @font-face {
        font-family: "HelveticaNeueRoman";
        src: url("../assets/fonts/HelveticaNeueLTStd-Roman") format("truetype");
    }
`
export default GlobalStyles



