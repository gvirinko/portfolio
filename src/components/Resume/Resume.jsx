import React from "react";
import {
  ResumeComponent,
  ResumeWrapper,
  ResumeFrame,
  DownloadButton,
} from "./elements";
import MyResume from "../../images/Resume(Gnativ).pdf";

export const Resume = () => {
  return (
    <ResumeComponent>
      <ResumeWrapper>
        <ResumeFrame
          title="resume"
          src="https://drive.google.com/file/d/1KMlj2ex-5B00HHjrYLlCtAEjURMdCsxr/preview"
        />
        <DownloadButton href={MyResume} download>
          Download My Resume
        </DownloadButton>
      </ResumeWrapper>
    </ResumeComponent>
  );
};
