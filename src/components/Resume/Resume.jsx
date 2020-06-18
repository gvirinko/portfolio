import React from "react";
import { ResumeComponent } from "./elements";
import MyResume from "../../images/Resume(Gnativ).pdf";

export const Resume = () => {
  return (
    <ResumeComponent>
      <iframe
        title="resume"
        src="https://drive.google.com/file/d/1OBV59Np-_ZC5mk2CU32b2cs-3YzjTp-o/preview"
        width="640"
        height="480"
      />
      <button>
        <a href={MyResume} download>
          Download My Resume
        </a>
      </button>
    </ResumeComponent>
  );
};
