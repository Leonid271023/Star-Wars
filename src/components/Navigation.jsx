import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/components.js";

const Navigation = () => {
    return (
        <nav className={'fixed-top mt-2 ms-5'}>
            <ul className={'nav'}>
                {navItems.map(item => <NavItem key={item} itemTitle={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;