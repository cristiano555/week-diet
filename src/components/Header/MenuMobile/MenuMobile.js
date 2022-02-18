import { MenuWrapper, Position  } from './MenuMobile.styles'
import { NavLink } from 'react-router-dom'

export const MenuMobile = () => {

    return (
        <MenuWrapper>
            <Position><NavLink to='/'>Dashboard</NavLink></Position>
            <Position><NavLink to="/recipes">Recipes</NavLink></Position>
            <Position><NavLink to='/challange'>Challange</NavLink></Position>
            <Position><NavLink to='/myprofile'><p>Olivia Wilde</p></NavLink></Position>  
        </MenuWrapper>
    )
}

export default MenuMobile;
