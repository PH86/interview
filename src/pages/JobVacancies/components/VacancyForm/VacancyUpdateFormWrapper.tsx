import React, { useState } from "react";
import { apiUrl } from "utils/constants";
import "./VacancyForm.css";
import { IJobData } from "utils/DummyVacancyData";
import { VacancyFull } from "./VacancyFull";
import { VacancyUpdateForm } from "./VacancyUpdateForm";

interface IVacancyUpdateForm {
  id: string;
  singleVacancy: IJobData;

  setToggleFormModal: (active: boolean) => void;
}

export const VacancyUpdateFormWrapper: React.FC<IVacancyUpdateForm> = ({
  id,
  singleVacancy,
  setToggleFormModal,
}): React.ReactElement => {
  const [screen, setScreen] = useState("form");
  const [jobForm, setJobForm] = useState({
    title: "",
    company: "",
    location: "",
    companyDescription: "",
    salary: 0,
    salaryMin: 0,
    salaryMax: 0,
    endDate: "",
    jobDescription: "",
    requirementEssential: [] as string[],
    requirementDesired: [] as string[],
    responsibilities: [] as string[],
  });

  const submitJobForm = () => {
    if (jobForm.salaryMax) {
      jobForm.salary = jobForm.salaryMax;
    }
    const bodyData = JSON.stringify(jobForm);

    fetch(`${process.env.REACT_APP_API_URL}${apiUrl.vacancies}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyData,
    })
      .then((res) => {
        // Handle successful api call
        if (res.ok) {
          res.json();
          // Show error message
        }
      })
      .catch((err) => err)
      // Remove this line once api call is set up as this is currently bypassing everything above
      .finally(() => setToggleFormModal(false));
  };

  if (screen === "review") {
    return (
      <VacancyFull
        jobForm={jobForm}
        setScreen={setScreen}
        handleSubmit={submitJobForm}
      />
    );
  }
  return (
    <VacancyUpdateForm
      jobForm={jobForm}
      singleVacancy={singleVacancy}
      setJobForm={setJobForm}
      setScreen={setScreen}
    />
  );
};
