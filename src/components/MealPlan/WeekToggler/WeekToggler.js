import React from 'react'
import { WeekTogglerElement, LeftArrow, Title, RightArrow  } from './WeekToggler.styles'
import LeftArrowImg from "../../../assets/images/leftarrow.png"
import RightArrowImg from "../../../assets/images/rightarrow.png"


const WeekToggler = ({selectedWeek, handleWeek}) => {    
    
    return (
        <WeekTogglerElement>
            <LeftArrow onClick={(e)=>handleWeek(e)} value="-" />
            <Title>Week {selectedWeek}</Title>
            <RightArrow onClick={(e)=>handleWeek(e)} value="+" />
        </WeekTogglerElement>
    )
}

export default WeekToggler;