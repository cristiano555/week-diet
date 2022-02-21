import React from 'react'
import { ProgressWeeksElement, Title, Dot, Number } from './ProgressWeeks.styles'
import progressPoint from "../../../assets/images/progresspoint.png"
import progressWeek from "../../../assets/images/progressweek.png"
import actualWeek from "../../../assets/images/actualweek.png"
import futureWeek from "../../../assets/images/futureweek.png"

const ProgressWeeks = () => {    

            return (
                <ProgressWeeksElement>
                    <Title>your 12 week progress</Title>
                    <Dot src={progressPoint} alt="progress point" />
                    <Dot src={progressWeek} alt="progress week" />
                    <Dot src={progressWeek} alt="progress week" />
                    <Dot src={progressWeek} alt="progress week" />
                    <Dot src={progressWeek} alt="progress week" />
                    <Dot src={progressWeek} alt="progress week" />
                    <Dot src={actualWeek} alt="actual week" />
                    <Dot src={futureWeek} alt="future week" />
                    <Dot src={futureWeek} alt="future week" />
                    <Dot src={futureWeek} alt="future week" />
                    <Dot src={futureWeek} alt="future week" />
                    <Dot src={futureWeek} alt="future week" />
                    <Number><p>1</p></Number>
                    <Number>2</Number>
                    <Number>3</Number>
                    <Number>4</Number>
                    <Number>5</Number>
                    <Number>6</Number>
                    <Number>7</Number>
                    <Number>8</Number>
                    <Number>9</Number>
                    <Number>10</Number>
                    <Number>11</Number>
                    <Number>12</Number>
                </ProgressWeeksElement>
     
            )
}

export default ProgressWeeks;