import React, { useState, useCallback, useRef, useEffect, FC } from 'react'
import { InformationBarElement } from './InformationBar.styles'
import InfoBox from '../InfoBox/InfoBox'
import IOS from '../../assets/images/ios.png';
import Android from '../../assets/images/android.png';

const InformationBar = () => {

    const button1 =  {
        buttonText:"Buy now",
        buttonHref:"abcdegfd",
    }

    const button2 =  {
        buttonText:"iOS",
        buttonHref:"abcdegfd",
        buttonIcon: IOS
    }

    const button3 =  {
        buttonText:"Android",
        buttonHref:"abcdegfd",
        buttonIcon: Android
    }

    const ButtonFAQ =  {
        buttonText:"Read FAQs",
        buttonHref:"faq",
    }

    return (
        <InformationBarElement>
            <InfoBox
                title="Runing out of products?" 
                text="Lorem ipsum dolor lot sit amet, consect turadipiscing elit. Integer aliquet." 
                button1={button1}
            />
            <InfoBox 
                title="Bod•e Trainer in your pocket"
                text="Lorem ipsum dolor lot sit amet, consect turadipiscing elit. Integer aliquet." 
                button1={button2}
                button2={button3}
            />
            <InfoBox 
                title="Frequently Asked Questions" 
                text="Lorem ipsum dolor lot sit amet, consect turadipiscing elit. Integer aliquet." 
                button1={ButtonFAQ}
            />
        </InformationBarElement>
    )
}

export default InformationBar;