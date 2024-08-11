import React from 'react';
import open_menu from "../../assets/icons/open-menu.png"

const OpenMenu = ({handleopen}) => {
    return (
        <div onClick={handleopen}>
            <img loading='lazy' className='pointer-events-none' src={open_menu} alt="open_menu-icon" />
        </div>
    );
};

export default OpenMenu;