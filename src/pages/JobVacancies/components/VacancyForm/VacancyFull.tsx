import React from "react";
import styled from "styled-components";
import { backgroundColor, textColor } from "themes/theme";
import { IJobData } from "utils/JobVacancyFull";

const Article = styled.article`
  background-color: ${backgroundColor};
  color: ${textColor};
`;

interface IVacancyFull {
  jobForm: IJobData;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
}

export const VacancyFull: React.FC<IVacancyFull> = ({
  jobForm,
  setScreen,
  handleSubmit,
}): React.ReactElement => {
  return (
    <div>
      <Article className="single-job-container">
        <div className="single-job-header">
          <div className="single-job-title">
            <h1>{jobForm?.title}</h1>
            <h4>End Date: {jobForm?.endDate}</h4>
          </div>
          <h2>{jobForm?.company}</h2>
          <h4>Location: {jobForm?.location}</h4>
          <h5>{jobForm?.companyDescription}</h5>
          <h4>
            Salary: £{jobForm?.salaryMin}-£{jobForm?.salaryMax} per annum
          </h4>
        </div>
        <div className="single-job-header">
          <h2>Description</h2>
          <h5>{jobForm?.jobDescription}</h5>
        </div>
        <div className="single-job-header">
          <h3>Essential Requirements</h3>
          <ul>
            {jobForm?.requirementsEssential?.map((essential: string) => {
              return <li>{essential}</li>;
            })}
          </ul>
          <h3>Desirable</h3>
          <ul>
            {jobForm?.requirementsDesirable?.map((desirable: string) => {
              return <li>{desirable}</li>;
            })}
          </ul>
          <h3>Key Responsibilities</h3>
          <ul>
            {jobForm?.responsibilities?.map((responsibility: string) => {
              return <li>{responsibility}</li>;
            })}
          </ul>
        </div>
        <button
          onClick={() => handleSubmit()}
          className="standard-button"
          type="button"
        >
          Submit
        </button>
        <button
          onClick={() => setScreen("form")}
          className="standard-button"
          type="button"
        >
          Edit
        </button>
      </Article>
    </div>
  );
};
