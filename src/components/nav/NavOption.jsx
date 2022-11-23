import React from 'react';
import { Link } from 'react-scroll';

const NavOption = ({ item, number }) => {
    return (
        <p className="border-b-2 border-transparent cursor-pointer text-text hover:border-neon">
            <Link
                activeClass="active"
                duration={500}
                href={item.href}
                offset={-100}
                smooth={true}
                spy={true}
                to={item.href}
            >
                <span className="text-neon">{number}. </span>
                {item.name}
            </Link>
            {item.name}
        </p>
    );
};

export default NavOption;