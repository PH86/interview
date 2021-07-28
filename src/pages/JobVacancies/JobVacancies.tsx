import React from "react";
import Modal from "styled-react-modal";
import { motion } from "framer-motion";
import {
  pageTransitions,
  staggerTransitions,
  tableTransitions,
  modalTransitions,
} from "utils/Animations";
import {
  VacancyFormWrapper,
  JobVacanciesList,
} from "pages/JobVacancies/components";
import "./JobVacancies.css";
import "./components/VacancyCard/VacancyCard.css";
import { IJobData } from "utils/DummyVacancyData";
import { backgroundColor } from "themes/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/pro-duotone-svg-icons";
import { useAppContext } from "hooks/useAppContext";
import { apiUrl } from "utils/constants";

const StyledModal = Modal.styled`
    width: 90vw;
    height: 90vh;
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${backgroundColor};
    overflow-y: scroll;
`;

export const JobVacancies: React.FC = (): React.ReactElement => {
  const { openModal, setOpenModal } = useAppContext();

  const [search, setSearch] = React.useState<string>("");
  const [searchFilter, setSearchFilter] = React.useState<string>("title");
  const [vacancies, setVacancies] = React.useState<IJobData[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}${apiUrl.vacancies}`
      );
      const json = await res.json();
      setVacancies(json);
    }
    fetchData();
  }, []);

  const toggleModal = () => {
    setOpenModal();
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      variants={pageTransitions}
      className="content-container"
    >
      <h1>Job Vacancies</h1>
      <div className="search-container">
        <div className="search-bar-container">
          <div className="search-bar">
            <input
              type="text"
              id="candidateSearch"
              name="candidateSearch"
              placeholder="Enter your search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
          </div>
          <button
            onClick={() => setOpenModal()}
            className="standard-button add-vacancy"
            type="button"
          >
            Add Vacancy
          </button>
        </div>

        <h3 className="radio-container-title">Search by:</h3>
        <div className="radio-container-multiple">
          <div className="radio-container-div">
            <label htmlFor="title" className="radio-container">
              Job Title
              <input
                id="title"
                type="radio"
                checked={searchFilter === "title"}
                value="title"
                onChange={(e) => setSearchFilter(e.target.value)}
              />
              <span className="checkmark" />
            </label>
          </div>
          <div className="radio-container-div">
            <label htmlFor="company" className="radio-container">
              Company
              <input
                id="company"
                type="radio"
                checked={searchFilter === "company"}
                value="company"
                onChange={(e) => setSearchFilter(e.target.value)}
              />
              <span className="checkmark" />
            </label>
          </div>
          <div className="radio-container-div">
            <label htmlFor="location" className="radio-container">
              Location
              <input
                id="location"
                type="radio"
                checked={searchFilter === "location"}
                value="location"
                onChange={(e) => setSearchFilter(e.target.value)}
              />
              <span className="checkmark" />
            </label>
          </div>
        </div>
      </div>
      <motion.div
        className="vacancy-table-container"
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <motion.div variants={staggerTransitions}>
          <article>
            <motion.div
              className="vacancy-table-header"
              variants={tableTransitions}
            >
              <h3>Job Title</h3>
              <h3>Company</h3>
              <h3>Location</h3>
              <h3>Salary</h3>
              <h3 className="vacancy-card-media-remove">End Date</h3>
            </motion.div>
          </article>
          <div>
            <JobVacanciesList
              data={vacancies}
              search={search}
              searchFilter={searchFilter}
            />
          </div>
        </motion.div>
      </motion.div>

      <StyledModal
        isOpen={openModal}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <motion.div variants={modalTransitions}>
          <button
            onClick={() => setOpenModal()}
            className="standard-button"
            type="button"
          >
            Close
          </button>
          <VacancyFormWrapper />
        </motion.div>
      </StyledModal>
    </motion.div>
  );
};
