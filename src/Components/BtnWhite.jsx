import React from 'react';

const BtnWhite = ({btn}) => {
    return (
        <a
          href="#"
          className="font-semibold bg-white text-black hover:text-white hover:bg-black-50 rounded-full w-36 px-5 py-3 text-nowrap text-sm text-center"
        >
          {btn}
        </a>
    );
};

export default BtnWhite;