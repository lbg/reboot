import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import FooterV1 from '../../components/footer/FooterV1';
import PDFView from '../../components/pdf/PDFView';

const Brochure = () => {
    return (
        <>
            <div className="page-wrapper">
                <span className="header-span"></span>
                <HeaderV1 headerStyle="header-style-two" parentMenu='Brochure' />
                <BreadCrumb title="brochure" breadCrumb="Brochure" />
                <PDFView pdfFile='../images/testMap.pdf'/>
                <FooterV1 />
            </div>
        </>
    );
};

export default Brochure;