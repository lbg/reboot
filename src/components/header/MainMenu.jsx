import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const MainMenu = ({ parentMenu, toggleMenu, toggleMultiMenu }) => {
    return (
        <>
            <ul className="navigation clearfix">
                <li className={`dropdown ${parentMenu === 'home' ? 'current' : ''}`}>
                    {/* <ul className='sub-menu'> */}
                        {/* { <li><Link to="/#">Home Classic</Link></li>} */}
                        {/* <li><Link to="/home-2#">Home Conference</Link></li> */}
                        {/* <li><Link to="/home-3#">Home Meetup</Link></li> */}
                        {/* <li><Link to="/home-4#">Home Page Four</Link></li> */}
                        {/* <li><Link to="/home-5#">Home Page Five</Link></li> */}
                        {/* <li className={`dropdown ps-0 multi-menu-parent`}> */}
                            {/* <Link to={void (0)} onClick={toggleMultiMenu}>Header Styles</Link> */}
                            {/* <ul className='multi-menu'> */}
                                {/* <li><Link to="/#">Header Style One</Link></li> */}
                                {/* <li><Link to="/home-2#">Header Style Two</Link></li> */}
                                {/* <li><Link to="/home-3#">Header Style Three</Link></li> */}
                                {/* <li><Link to="/home-4#">Home Page Four</Link></li> */}
                                {/* <li><Link to="/home-5#">Home Page Five</Link></li> */}
                            {/* </ul> */}
                            {/* <div className="dropdown-btn" ><span className="fa fa-angle-down"></span></div> */}
                        {/* </li> */}
                    {/* </ul> */}
                    <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div>
                </li>
                
                <li className={`dropdown open ${parentMenu === 'home' ? 'current' : ''}`}>
                 <Link to={void (0)} onClick={toggleMenu}>More Details</Link>
                        <ul className='sub-menu'>
                        <li><Link to="/reboot/">Home</Link></li>
                        <li><Link to="/reboot/schedule#">Schedule</Link></li>
                        <li><Link to="/reboot/code-of-conduct#">Code of Conduct</Link></li>
                        <li><Link to="/reboot/good-to-know#">Good to Know</Link></li>
                        <li><Link to="/reboot/map#">Map</Link></li>
                        <li><Link to="/reboot/brochure#">Brochure</Link></li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;