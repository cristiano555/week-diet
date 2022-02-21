import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderElement, ContentContainer, Logo, MainMenu, UserMenu, Hamburger } from './Header.styles'
import HamburgerIcon from '../../assets/images/hamburger.png';
import Android from '../../assets/images/android.png';
import MenuMobile from './MenuMobile/MenuMobile';

const Header = () => {
    const [MenuMobileView, setMobileMenuView] = useState(false)
    // const router = useRouter()
    // const [scrolled, setScrolled]=useState(false);
    
    // const handleScroll=() => {
    //     const offset=window.scrollY;
    //     if(offset > 120 ){
    //       setScrolled(true);
    //     }
    //     else{
    //       setScrolled(false);
    //     }
    //   }

    const toggleMenu = () => {
        setMobileMenuView(!MenuMobileView);
    }

    return (
        <HeaderElement>
            <ContentContainer>
                <Hamburger src={HamburgerIcon} onClick={toggleMenu} MenuMobileView={MenuMobileView} />
                <Logo />
                <MainMenu>
                    <ul>
                        <li><NavLink to="/">Dashboard</NavLink></li>
                        <li><NavLink to="/recipes">Recipes</NavLink></li>
                        <li><NavLink to="/challenge">Challenge</NavLink></li>
                    </ul>
                </MainMenu>
                <UserMenu>
                    <div>
                        <p>Olivia Wilde</p>
                    </div>
                </UserMenu>
            </ContentContainer>
            {MenuMobileView && <MenuMobile MenuMobileView={MenuMobileView} setMobileMenuView={setMobileMenuView} />} 
        </HeaderElement>
    )
}

export default Header;