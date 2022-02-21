import React from 'react'
import { WeekTogglerElement, LeftArrow, Title, RightArrow  } from './WeekToggler.styles'



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