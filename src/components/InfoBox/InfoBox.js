import React from 'react'
import { InfoBoxElement, Title, Content } from './InfoBox.styles'
import Button from '../Button/Button'

const InfoBox = ( { title, text, button1, button2 } ) => {    

    return (
        <InfoBoxElement>
            <Title>{title}</Title>
            <Content>{text}</Content>
            {button1 && <Button props={button1} />}
            {button2 && <Button props={button2}/>}
        </InfoBoxElement>
    )
}

export default InfoBox;