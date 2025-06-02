import React from 'react';

const PDFView = ({pdfFile}) => {
console.log('pdfFile:' + pdfFile)   
    return (
                <div className="pdfMap">
                    <iframe src={`${pdfFile}#toolbar=0`} width="100%" height="1000px"></iframe>
                </div>
    );
};

export default PDFView;