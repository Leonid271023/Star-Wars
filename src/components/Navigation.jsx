import NavItem from "./NavItem.jsx";
import {navItems, StarWarsContext} from "../utils/components.js";
import {useContext} from "react";

const Navigation = () => {
    const {changePage} = useContext(StarWarsContext);
    return (
        <nav className={'fixed-top mt-2 ms-5'}>
            <ul className={'nav'}>
                {navItems.map(item => <NavItem changePage={changePage} key={item} itemTitle={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;