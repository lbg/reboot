import React from 'react';

const PDFView = ({pdfFile}) => {
   
    return (
                <div className="pdfMap">
                    <iframe src={pdfFile} width="100%" height="1000px"></iframe>
                </div>
    );
};

export default PDFView;