import React from 'react';
import close_menu from "../../assets/icons/close-menu.png"

const CloseMenu = ({handleclose}) => {
    return (
        <div onClick={handleclose}>
            <img loading='lazy' className='pointer-events-none' src={close_menu} alt="close_menu-icon" />
        </div>
    );
};

export default CloseMenu;