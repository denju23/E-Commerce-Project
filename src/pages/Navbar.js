import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import '../Styles/Navbar.css';






function Navbar() {
    return (
        <React.Fragment>
            <nav>
                <div className='nav_box'>
                    <span className='my_shop'>Fashion For Fashion Lovers</span>
                    <div className='cart'>
                        <span style={{ fontSize: '18px' }}>My Shopping <FaShoppingCart /></span>
                        <span>0</span>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;