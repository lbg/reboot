import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import FooterV1 from '../../components/footer/FooterV1';
import CodeOfConduct from '../../components/event/CodeOfConduct';

const CodeOfConductPage = () => {
    return (
        <>
            <div className="page-wrapper">
                <span className="header-span"></span>
                <HeaderV1 headerStyle="header-style-two" parentMenu='' />
                <BreadCrumb title="Code of Conduct" breadCrumb="Code of Conduct" />
                <CodeOfConduct />
                <FooterV1 />
            </div>
        </>
    );
};

export default CodeOfConductPage;