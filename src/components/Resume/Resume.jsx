import React from "react";
import { ResumeComponent } from "./elements";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Resume = () => {
  return (
    <ResumeComponent>
      <div>
        <Document file="./Resume.pdf">
          {/* <Document file="https://web.stanford.edu/class/cs142/lectures/FrontEnd.pdf"> */}
          <Page />
        </Document>
      </div>
    </ResumeComponent>
  );
};
