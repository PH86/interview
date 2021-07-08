import React from "react";
import { motion } from "framer-motion";
import { tableTransitions } from "utils/Animations";
import { IJobData } from "utils/DummyVacancyData";
import { VacancyCard } from "../index";

interface IJobVacanciesList {
  data: IJobData[];
  searchFilter?: string;
  search?: string;
}

export const JobVacanciesList: React.FC<IJobVacanciesList> = ({
  data,
  searchFilter,
  search,
}) => {
  return (
    <div>
      {searchFilter === "title" &&
        data
          .filter((vacancy) =>
            vacancy.title.toLowerCase().includes(`${search}`.toLowerCase())
          )
          .map((filteredVacancy) => (
            <motion.div
              variants={tableTransitions}
              key={`vacancy-${filteredVacancy.id}`}
            >
              <VacancyCard
                id={filteredVacancy.id}
                title={filteredVacancy.title}
                company={filteredVacancy.company}
                salary={filteredVacancy.salary}
                location={filteredVacancy.location}
                applicants={filteredVacancy.applicants}
                endDate={filteredVacancy.endDate}
              />
            </motion.div>
          ))}
      {searchFilter === "company" &&
        data
          .filter((vacancy) =>
            vacancy.company.toLowerCase().includes(`${search}`.toLowerCase())
          )
          .map((filteredVacancy) => (
            <motion.div
              variants={tableTransitions}
              key={`vacancy-${filteredVacancy.id}`}
            >
              <VacancyCard
                id={filteredVacancy.id}
                title={filteredVacancy.title}
                company={filteredVacancy.company}
                salary={filteredVacancy.salary}
                location={filteredVacancy.location}
                applicants={filteredVacancy.applicants}
                endDate={filteredVacancy.endDate}
              />
            </motion.div>
          ))}
      {searchFilter === "location" &&
        data
          .filter((vacancy) =>
            vacancy.location.toLowerCase().includes(`${search}`.toLowerCase())
          )
          .map((filteredVacancy) => (
            <motion.div
              variants={tableTransitions}
              key={`vacancy-${filteredVacancy.id}`}
            >
              <VacancyCard
                id={filteredVacancy.id}
                title={filteredVacancy.title}
                company={filteredVacancy.company}
                salary={filteredVacancy.salary}
                location={filteredVacancy.location}
                applicants={filteredVacancy.applicants}
                endDate={filteredVacancy.endDate}
              />
            </motion.div>
          ))}
    </div>
  );
};
