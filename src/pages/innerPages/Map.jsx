import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import FooterV1 from '../../components/footer/FooterV1';
import PDFView from '../../components/pdf/PDFView';

const Map = () => {
    return (
        <>
            <div className="page-wrapper">
                <span className="header-span"></span>
                <HeaderV1 headerStyle="header-style-two" parentMenu='map' />
                <BreadCrumb title="map" breadCrumb="Map" />
                <div className="map-image">
                    <img src="../reboot/images/MNC_2025.png" alt="Reboot Manchester 2025 Map" />
                </div>
                <FooterV1 />
            </div>
        </>
    );
};

export default Map;