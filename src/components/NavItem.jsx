const NavItem = ({itemTitle}) => {
    return (
        <div>
            <li className={"nav-item btn btn-danger mx-1"}>{itemTitle}</li>
        </div>
    );
};

export default NavItem;