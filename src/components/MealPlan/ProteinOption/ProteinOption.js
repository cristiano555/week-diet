import React from "react"
import { ProteinOptionElement, Title, ImageContainer } from "./ProteinOption.styles"
import NoFish from "../../../assets/images/nofish.png"
import NoChicken from "../../../assets/images/nochicken.png"
import Vege from "../../../assets/images/vege.png"
import Cheese from "../../../assets/images/cheese.png"
import Steak from "../../../assets/images/steak.png"

const ProteinOption = () => {    

    return (
        <ProteinOptionElement>
            <Title>select your protein options</Title>
            <img src={Vege} alt="vege" />
            <img src={Cheese} alt="cheese" />
            <img src={Steak} alt="steak" />
            <img src={NoFish} alt="fish" />
            <img src={NoChicken} alt="chicken" />
        </ProteinOptionElement>
    )
}

export default ProteinOption;