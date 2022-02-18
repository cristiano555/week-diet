import React from 'react'
import { DayTitle, DayElement, Meal, WithoutMealDay, Carb, Workout } from './Day.styles'
import SmilingFace from '../../../assets/images/smilingface.png';


const Day = ( {day: { name, firstMeal, secondMeal, thirdMeal, fourthMeal, fifthMeal, carb}} ) => {    
    console.log("Day component rendered");
    return (
        <DayElement>
            <DayTitle>day {name}</DayTitle>
            {(firstMeal === ''|| firstMeal === undefined) ? 
                <WithoutMealDay><p>Guilt-Free Day</p><img src={SmilingFace}/></WithoutMealDay> 
                :
                <>
                    <Meal>{firstMeal}</Meal>
                    <Meal>{secondMeal}</Meal>
                    <Meal>{thirdMeal}</Meal>
                    <Meal>{fourthMeal}</Meal>
                    <Meal>{fifthMeal}</Meal>
                    <Carb>{carb}</Carb>
                    <Workout></Workout>
                </>
            }
        </DayElement>
    )
}

export default Day;