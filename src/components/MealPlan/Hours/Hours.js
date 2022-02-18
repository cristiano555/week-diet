import React from 'react'
import { HoursElement, Hour, EmptyBlock, Workout, } from './Hours.styles'


const Hours = ( { title, text, button1, button2 } ) => {    

    return (
        <HoursElement>
            <EmptyBlock height={50} />
            <Hour>06:00<span>AM</span></Hour>
            <Hour>09:00<span>AM</span></Hour>
            <Hour>12:00<span>AM</span></Hour>
            <Hour>3:00<span>PM</span></Hour>
            <Hour>6:00<span>PM</span></Hour>
            <EmptyBlock height={35} />
            <Workout/>
        </HoursElement>
    )
}

export default Hours;