import React from "react";

const PDFView = ({ pdfFile }) => {
  return (
    <div className="pdfMap">
        <iframe src={pdfFile} width="1007" height="976"></iframe>
    </div>
  );
};

export default PDFView;
