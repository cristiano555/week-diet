import React, {useState} from "react"
import { MealPlanElement, MealPlanOptions, ScheduleDesktop, ScheduleMobileTablet, ArrowLeft, ArrowRight } from "./MealPlan.styles"
import Hours from "./Hours/Hours"
import Day from "./Day/Day"
import WeekToggler from "./WeekToggler/WeekToggler"
import ProgressWeeks from "./ProgressWeeks/ProgressWeeks"
import ProteinOption from "./ProteinOption/ProteinOption"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MealPlan = () => {
    const [selectedWeek, setSelectedWeek] = useState(7);
    const [weeks, setWeeks] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

    function handleWeek (e){
        const action = e.target.value;
        console.log("console.log weeks length", weeks.length);
        if((action === "+") && (selectedWeek < weeks.length)){
            setSelectedWeek(selectedWeek+1);
        }

        if((action === "-") && (selectedWeek > 1)){
            setSelectedWeek(selectedWeek-1);
        }
    }

    const day64 = {
        name: "64",
        firstMeal: "Bode Shake",
        secondMeal: "Ham and Swiss Roll Ups",
        thirdMeal: "Turkey Melt",
        fourthMeal: "Bode Burn with Mozzarella and Tomato Slices",
        fifthMeal: "Turkey Melt",
        carb: "low-carb",
    }
    const day65 = {
        name: "65",
        firstMeal: "Bode Shake",
        secondMeal: "Ham and Swiss Roll Ups",
        thirdMeal: "Turkey Melt",
        fourthMeal: "Bode Burn with Mozzarella and Tomato Slices",
        fifthMeal: "Turkey Melt",
        carb: "low-carb",
    }
    const day66 = {
        name: "66",
        firstMeal: "Bode Shake",
        secondMeal: "Grilled Steak (HC)",
        thirdMeal: "Bode Shake",
        fourthMeal: "Bode Burn and Whole-Wheat English Muffin with Butter Spray",
        fifthMeal: "Garlic Lime Chicken (HC)",
        carb: "high-carb",
    }
    const day67 = {
        name: "67",
        firstMeal: "Bode Shake",
        secondMeal: "Ham and Swiss Roll Ups",
        thirdMeal: "Turkey Melt",
        fourthMeal: "Bode Burn with Mozzarella and Tomato Slices",
        fifthMeal: "Turkey Melt",
        carb: "low-carb",
    }
    const day68 = {
        name: "68",
        firstMeal: "Bode Shake",
        secondMeal: "Ham and Swiss Roll Ups",
        thirdMeal: "Turkey Melt",
        fourthMeal: "Bode Burn with Mozzarella and Tomato Slices",
        fifthMeal: "Turkey Melt",
        carb: "low-carb",
    }
    const day69 = {
        name: "69",
        firstMeal: "Bode Shake",
        secondMeal: "Grilled Steak (HC)",
        thirdMeal: "Bode Shake",
        fourthMeal: "Bode Burn and Whole-Wheat English Muffin with Butter Spray",
        fifthMeal: "Garlic Lime Chicken (HC)",
        carb: "high-carb",
    }
    const day70 = {
        name: "70",
    }
    const day71 = {
        name: "71",
        firstMeal: "Bode Shake",
        secondMeal: "Bode Shake",
        thirdMeal: "Bode Shake",
        fourthMeal: "Bode Shake",
        fifthMeal: "Bode Shake",
    }
    const DaysToDisplay = [day64, day65, day66, day67, day68, day69, day70];

    // const ArrowLeft = (props) => (
    //     <button
    //         {...props}
    //         className="prev"/>
    // );
    // const ArrowRight = (props) => (
    //     <button
    //         {...props}
    //         className="next"/>
    // );

    const settings = {
        arrows: true,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    return (
        <MealPlanElement>
            <MealPlanOptions>
                <ProgressWeeks />
                <WeekToggler selectedWeek={selectedWeek} handleWeek={handleWeek} />
                <ProteinOption />
            </MealPlanOptions>
            <ScheduleDesktop>
                <Hours />
                    {DaysToDisplay.map((day, index) =><Day key={day.name} day={day} index={index} />)}
            </ScheduleDesktop>
            <ScheduleMobileTablet>
                <Hours />
                <Slider {...settings}>
                    {DaysToDisplay.map((day, index) =><Day key={day.name} day={day} index={index} />)}
                </Slider>
            </ScheduleMobileTablet>
        </MealPlanElement>
    )
}

export default MealPlan;