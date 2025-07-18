import Button from "./ui/Button.jsx";
import {useContext} from "react";
import {SWContext} from "../utils/contex.js";


const NavItem = ({itemTitle}) => {
    const {changePage} = useContext(SWContext);


    return (
        <Button callback={() => changePage(itemTitle)}>{itemTitle}</Button>
    )
}


export default NavItem;
