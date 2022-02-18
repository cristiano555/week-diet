import React from 'react'
import {  ButtonElement, ButtonLink, Icon, ButtonText, Arrow } from './Button.styles'
import ArrowUrl from '../../assets/images/arrow.png';


const Button = ( {props: props} ) => {

    return (
        // <ButtonLink href={props.buttonHref}>
        //     <ButtonElement>
        //         {props.buttonIcon && <img src={props.buttonIcon} alt="icon" />}
        //         {props.buttonText}
        //         <img src={Arrow} alt="arrow" />
        //     </ButtonElement>
        // </ButtonLink>
        <ButtonLink href={props.buttonHref}>
           <ButtonElement>
               {props.buttonIcon && <Icon src={props.buttonIcon} alt="icon" />}
               {props.buttonText && <ButtonText>{props.buttonText}</ButtonText>}
               <Arrow src={ArrowUrl} alt="arrow" />
           </ButtonElement>
       </ButtonLink>
    )
}

export default Button;