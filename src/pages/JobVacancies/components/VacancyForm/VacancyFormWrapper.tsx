import React, { useState } from "react";
import { useAppContext } from "hooks/useAppContext";
import { apiUrl } from "utils/constants";
import "./VacancyForm.css";
import { VacancyForm } from "./VacancyForm";
import { VacancyFull } from "./VacancyFull";

export const VacancyFormWrapper = (): React.ReactElement => {
  const [screen, setScreen] = useState("form");
  const { setOpenModal } = useAppContext();

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
    console.log(bodyData);

    fetch(`${process.env.REACT_APP_API_URL}${apiUrl.vacancies}`, {
      method: "POST",
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
      .finally(() => setOpenModal());
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
    <VacancyForm
      jobForm={jobForm}
      setJobForm={setJobForm}
      setScreen={setScreen}
    />
  );
};
