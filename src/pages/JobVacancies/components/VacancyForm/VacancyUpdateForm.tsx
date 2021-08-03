/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from "react";
import "./VacancyForm.css";
import styled from "styled-components";
import { backgroundColor, textColor, shadow } from "themes/theme";
import { IJobData } from "utils/JobVacancyFull";

const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
`;

const Shadow = styled.div`
  box-shadow: ${shadow};
`;

interface IVacancyUpdateForm {
  jobForm: IJobData;
  singleVacancy: IJobData;
  setJobForm: React.Dispatch<React.SetStateAction<IJobData>>;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}

export const VacancyUpdateForm: React.FC<IVacancyUpdateForm> = ({
  jobForm,
  singleVacancy,
  setJobForm,
  setScreen,
}): React.ReactElement => {
  const [essentialRequirmentInput, setEssentialRequirmentInput] = useState("");
  const [desiredRequirmentInput, setDesiredRequirmentInput] = useState("");
  const [responsibilitiesInput, setResponsibilitiesInput] = useState("");

  React.useEffect(() => {
    setJobForm(singleVacancy);
  }, []);

  const handleInputOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setJobForm((prev) => ({
        ...prev,
        [event.target.name]:
          event.target.type === "number"
            ? parseInt(event.target.value, 10)
            : event.target.value,
      }));
    },
    [setJobForm]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setScreen("review");
  };

  const clearForm = () => {
    setJobForm({
      id: "0",
      title: "",
      company: "",
      location: "",
      companyDescription: "",
      applicants: [""],
      salary: 0,
      salaryMin: 0,
      salaryMax: 0,
      endDate: "",
      jobDescription: "",
      requirementEssential: [],
      requirementDesired: [],
      responsibilities: [],
    });
  };

  const addEssentialRequirment = () => {
    if (essentialRequirmentInput) {
      setJobForm((prev) => ({
        ...prev,
        requirementEssential: [
          ...prev.requirementEssential,
          essentialRequirmentInput,
        ],
      }));
      setEssentialRequirmentInput("");
    }
  };

  const removeEssentialRequirment = (requirment: string) => {
    setJobForm((prev) => ({
      ...prev,
      requirementEssential: prev.requirementEssential.filter(
        (item) => item !== requirment
      ),
    }));
  };

  const addDesiredRequirment = () => {
    if (desiredRequirmentInput) {
      setJobForm((prev) => ({
        ...prev,
        requirementDesired: [
          ...prev.requirementDesired,
          desiredRequirmentInput,
        ],
      }));
      setDesiredRequirmentInput("");
    }
  };

  const removeDesiredRequirment = (requirment: string) => {
    setJobForm((prev) => ({
      ...prev,
      requirementDesired: prev.requirementDesired.filter(
        (item) => item !== requirment
      ),
    }));
  };

  const addResponsibility = () => {
    if (responsibilitiesInput) {
      setJobForm((prev) => ({
        ...prev,
        responsibilities: [...prev.responsibilities, responsibilitiesInput],
      }));
      setResponsibilitiesInput("");
    }
  };

  const removeResponsibility = (requirment: string) => {
    setJobForm((prev) => ({
      ...prev,
      responsibilities: prev.responsibilities.filter(
        (item) => item !== requirment
      ),
    }));
  };

  const clearJobFormArray = (jobFormArray: string) => {
    setJobForm((prev) => ({ ...prev, [jobFormArray]: [] }));
  };
  return (
    <form className="vacancy-container" onSubmit={handleSubmit}>
      <Wrapper className="vacancy-form-container">
        <h2>Job Vacancy Form</h2>
        <Shadow className="form-list-container">
          <h2>Job Information</h2>
          <div className="vacancy-form-3">
            <input
              className="form-input"
              type="text"
              id="title"
              name="title"
              placeholder="Job Title"
              value={jobForm.title}
              onChange={(e) => handleInputOnChange(e)}
              required
            />
            <input
              className="form-input"
              type="number"
              id="salaryMin"
              name="salaryMin"
              placeholder="Salary Min"
              value={jobForm.salaryMin || ""}
              onChange={(e) => handleInputOnChange(e)}
              required
            />
            <input
              className="form-input"
              type="number"
              id="salaryMax"
              name="salaryMax"
              placeholder="Salary Max"
              value={jobForm.salaryMax || ""}
              onChange={(e) => handleInputOnChange(e)}
              required
            />
          </div>
          <textarea
            className="form-input"
            id="jobDescription"
            name="jobDescription"
            placeholder="Job Description"
            value={jobForm.jobDescription}
            onChange={(e) => handleInputOnChange(e)}
            required
          />
        </Shadow>
        <Shadow className="form-list-container">
          <h2>Company Information</h2>
          <div className="vacancy-form-3">
            <input
              className="form-input"
              type="text"
              id="company"
              name="company"
              placeholder="Company Name"
              value={jobForm.company}
              onChange={(e) => handleInputOnChange(e)}
              required
            />
            <input
              className="form-input"
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              value={jobForm.location}
              onChange={(e) => handleInputOnChange(e)}
              required
            />
          </div>
          <textarea
            className="form-input"
            id="companyDescription"
            name="companyDescription"
            placeholder="Company Description"
            value={jobForm.companyDescription}
            onChange={(e) => handleInputOnChange(e)}
            required
          />
          <div>
            <label htmlFor="endDate">
              Closing Date:
              <input
                className="form-input"
                type="date"
                id="endDate"
                name="endDate"
                placeholder="End Date"
                value={jobForm.endDate}
                onChange={(e) => handleInputOnChange(e)}
                required
              />
            </label>
          </div>
        </Shadow>
        <Shadow className="form-list-container">
          <h2>Essential Requirments</h2>
          <ul className="form-list">
            {jobForm.requirementEssential?.map((requirment) => {
              return (
                <div className="form-list-item-container">
                  <li className="form-list-item">{requirment}</li>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={() => removeEssentialRequirment(requirment)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </ul>
          <div className="form-list-subcontainer">
            <input
              className="form-input"
              type="text"
              id="essentialRequirmentInput"
              name="essentialRequirmentInput"
              placeholder="Essential Requirment"
              value={essentialRequirmentInput}
              onChange={(e) => setEssentialRequirmentInput(e.target.value)}
            />
            <div className="requirment-button-container">
              <button
                type="button"
                className="standard-button"
                onClick={() => addEssentialRequirment()}
              >
                add
              </button>
              <button
                type="button"
                className="standard-button"
                onClick={() => clearJobFormArray("requirementEssential")}
              >
                clear
              </button>
            </div>
          </div>
        </Shadow>
        <Shadow className="form-list-container">
          <h2>Desired Requirments</h2>
          <ul className="form-list">
            {jobForm.requirementDesired?.map((requirment) => {
              return (
                <div className="form-list-item-container">
                  <li className="form-list-item">{requirment}</li>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={() => removeDesiredRequirment(requirment)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </ul>
          <div className="form-list-subcontainer">
            <input
              className="form-input"
              type="text"
              id="desiredlRequirmentInput"
              name="desiredRequirmentInput"
              placeholder="Desired Requirment"
              value={desiredRequirmentInput}
              onChange={(e) => setDesiredRequirmentInput(e.target.value)}
            />
            <div className="requirment-button-container">
              <button
                type="button"
                className="standard-button"
                onClick={() => addDesiredRequirment()}
              >
                add
              </button>
              <button
                type="button"
                className="standard-button"
                onClick={() => clearJobFormArray("requirementDesired")}
              >
                clear
              </button>
            </div>
          </div>
        </Shadow>
        <Shadow className="form-list-container">
          <h2>Responsibilities</h2>
          <ul className="form-list">
            {jobForm.responsibilities?.map((requirment) => {
              return (
                <div className="form-list-item-container">
                  <li className="form-list-item">{requirment}</li>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={() => removeResponsibility(requirment)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </ul>
          <div className="form-list-subcontainer">
            <input
              className="form-input"
              type="text"
              id="responsibilityInput"
              name="responsibilityInput"
              placeholder="Responsibility"
              value={responsibilitiesInput}
              onChange={(e) => setResponsibilitiesInput(e.target.value)}
            />
            <div className="requirment-button-container">
              <button
                type="button"
                className="standard-button"
                onClick={() => addResponsibility()}
              >
                add
              </button>
              <button
                type="button"
                className="standard-button"
                onClick={() => clearJobFormArray("responsibilities")}
              >
                clear
              </button>
            </div>
          </div>
        </Shadow>
        <button type="submit" className="standard-button">
          Review Job
        </button>
        <button
          type="button"
          onClick={() => clearForm()}
          className="standard-button red-button"
        >
          Clear Form
        </button>
      </Wrapper>
    </form>
  );
};
