import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import FooterV1 from '../../components/footer/FooterV1';

const Brochure = () => {
    return (
        <>
            <div className="page-wrapper">
                <span className="header-span"></span>
                <HeaderV1 headerStyle="header-style-two" parentMenu='Brochure' />
                <BreadCrumb title="brochure" breadCrumb="Brochure" />
                <div className="image-gallery">
                    <img src="../reboot/images/Slide2.PNG" alt="Brochure Page 1" />
                    <img src="../reboot/images/Slide3.PNG" alt="Brochure Page 2" />
                    <img src="../reboot/images/Slide4.PNG" alt="Brochure Page 3" />
                    <img src="../reboot/images/Slide5.PNG" alt="Brochure Page 4" />
                    <img src="../reboot/images/Slide6.PNG" alt="Brochure Page 5" />
                    <img src="../reboot/images/Slide7.PNG" alt="Brochure Page 6" />
                    <img src="../reboot/images/Slide8.PNG" alt="Brochure Page 7" />
                    <img src="../reboot/images/Slide9.PNG" alt="Brochure Page 8" />
                    <img src="../reboot/images/Slide10.PNG" alt="Brochure Page 9" />
                    
                </div>
                <FooterV1 />
            </div>
        </>
    );
};

export default Brochure;