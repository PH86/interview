import React from "react";
import "./CandidateSearch.css";
import Modal from "styled-react-modal";
import { motion } from "framer-motion";
import { ApplicantCard, ApplicantTable } from "components";
import {
  pageTransitions,
  modalTransitions,
  staggerTransitions,
} from "utils/Animations";
import { backgroundColor } from "themes/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/pro-duotone-svg-icons";
import { IApplicantCard } from "components/Applicant/ApplicantCard";
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

export const CandidateSearch: React.FC = (): React.ReactElement => {
  const [search, setSearch] = React.useState("");
  const [searchFilter, setSearchFilter] = React.useState<string>("name");
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [applicantId, setApplicantId] = React.useState<string>();
  const [candidates, setCandidates] = React.useState<IApplicantCard[]>();

  // eslint-disable-next-line consistent-return
  const getCandidates = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}${apiUrl.candidates}`
      );
      const candidateData = await res.json();
      if (candidateData) {
        setCandidates(candidateData);
      }
    } catch (error) {
      return error;
    }
  };

  React.useEffect(() => {
    getCandidates();
  }, []);

  const handleClick = (id: string) => {
    setApplicantId(id);
    setOpenModal(true);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      variants={pageTransitions}
      className="content-container"
    >
      <h1>Candidate Search</h1>
      <div className="search-container">
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
        <h3 className="radio-container-title">Search by:</h3>
        <div className="radio-container-multiple">
          <div className="radio-container-div">
            <label htmlFor="name" className="radio-container">
              Name
              <input
                id="name"
                type="radio"
                checked={searchFilter === "name"}
                value="name"
                onChange={(e) => setSearchFilter(e.target.value)}
              />
              <span className="checkmark" />
            </label>
          </div>
          <div className="radio-container-div">
            <label htmlFor="currentJob" className="radio-container">
              Job title
              <input
                type="radio"
                checked={searchFilter === "currentJob"}
                value="currentJob"
                onChange={(e) => setSearchFilter(e.target.value)}
              />
              <span className="checkmark" />
            </label>
          </div>
          <div className="radio-container-div">
            <label htmlFor="location" className="radio-container">
              Location
              <input
                type="radio"
                checked={searchFilter === "location"}
                value="location"
                onChange={(e) => setSearchFilter(e.target.value)}
              />
              <span className="checkmark" />
            </label>
          </div>
        </div>
        <motion.div
          className="applicant-table-container"
          variants={staggerTransitions}
        >
          {search && (
            <motion.div variants={pageTransitions}>
              <article>
                <div className="applicant-table-header">
                  <h3>Name</h3>
                  <div className="vertical" />
                  <h3>Job Title</h3>
                  <div className="vertical" />
                  <h3>Location</h3>
                </div>
              </article>
            </motion.div>
          )}
          <motion.div
            className="applicant-table-container"
            variants={staggerTransitions}
          >
            {search &&
              searchFilter === "name" &&
              candidates
                ?.filter((applicant) =>
                  applicant.name
                    .toLowerCase()
                    .includes(`${search}`.toLowerCase())
                )
                .map((filteredApplicant) => (
                  <motion.div
                    onClick={() => handleClick(filteredApplicant.id)}
                    variants={pageTransitions}
                  >
                    <ApplicantTable
                      id={filteredApplicant.id}
                      name={filteredApplicant.name}
                      currentJob={filteredApplicant.currentJob}
                      location={filteredApplicant.location}
                    />
                  </motion.div>
                ))}
            {search &&
              searchFilter === "currentJob" &&
              candidates
                ?.filter((applicant) =>
                  applicant.currentJob
                    .toLowerCase()
                    .includes(`${search}`.toLowerCase())
                )
                .map((filteredApplicant) => (
                  <motion.div
                    onClick={() => handleClick(filteredApplicant.id)}
                    variants={pageTransitions}
                  >
                    <ApplicantTable
                      id={filteredApplicant.id}
                      name={filteredApplicant.name}
                      currentJob={filteredApplicant.currentJob}
                      location={filteredApplicant.location}
                    />
                  </motion.div>
                ))}
            {search &&
              searchFilter === "location" &&
              candidates
                ?.filter((applicant) =>
                  applicant.location
                    .toLowerCase()
                    .includes(`${search}`.toLowerCase())
                )
                .map((filteredApplicant) => (
                  <motion.div
                    onClick={() => handleClick(filteredApplicant.id)}
                    variants={pageTransitions}
                  >
                    <ApplicantTable
                      id={filteredApplicant.id}
                      name={filteredApplicant.name}
                      currentJob={filteredApplicant.currentJob}
                      location={filteredApplicant.location}
                    />
                  </motion.div>
                ))}
          </motion.div>
        </motion.div>
        <StyledModal
          isOpen={openModal}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <motion.div variants={modalTransitions}>
            <button
              onClick={() => setOpenModal(false)}
              className="standard-button"
              type="button"
            >
              Close
            </button>
            {applicantId &&
              candidates
                ?.filter((applicant) =>
                  applicant.id.toString().includes(`${applicantId}`)
                )
                .map((selectedApplicant) => (
                  <ApplicantCard
                    id={selectedApplicant.id}
                    name={selectedApplicant.name}
                    currentJob={selectedApplicant.currentJob}
                    location={selectedApplicant.location}
                    email={selectedApplicant.email}
                    phoneNumber={selectedApplicant.phoneNumber}
                    cvLink={selectedApplicant.cvLink}
                    closeModal={() => setOpenModal(false)}
                  />
                ))}
          </motion.div>
        </StyledModal>
      </div>
    </motion.div>
  );
};
