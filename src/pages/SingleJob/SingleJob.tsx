import React from "react";
import "./SingleJob.css";
import Modal from "styled-react-modal";
import styled from "styled-components";
import { motion } from "framer-motion";
import { shadow } from 'themes/theme';
import { useParams } from "react-router-dom";
import { pageTransitions, staggerTransitions, tableTransitions, modalTransitions } from "utils/Animations";
import { backgroundColor } from "themes/theme";
import { ApplicantCard, ApplicantTable } from 'components';
import { IApplicantCard } from 'components/Applicant/ApplicantCard';
import { IJobData } from "utils/DummyVacancyData";
import { apiUrl } from 'utils/constants';

const SingleJobContainer = styled.div`
    box-shadow: ${shadow};
`;

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

export const SingleJob: React.FC<{}> = (): React.ReactElement => {
    const { id } = useParams<{ id: string }>();
    const [openModal, setOpenModal] = React.useState<boolean>(false);
    const [applicantId, setApplicantId] = React.useState<number>();
    const [candidates, setCandidates] = React.useState<IApplicantCard[]>();
    const [singleVacancy, setSingleVacancy] = React.useState<IJobData>();

    React.useEffect(() => {
        getSingleJob()
        getCandidates()
    },[]);

    const getSingleJob = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}${apiUrl.vacancies}/${id}`);
            const vacancyData = await res.json();
            console.log(`${process.env.REACT_APP_API_URL}/${id}`)
            if(vacancyData) {
                setSingleVacancy(vacancyData);
            }
        } catch (error) {
            console.log(error)
        }
    };

    const getCandidates = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}${apiUrl.vacancies}/${id}${apiUrl.candidates}`);
            const candidateData = await res.json();
            console.log(`${process.env.REACT_APP_API_URL}${id}${apiUrl.candidates}`)
            if(candidateData) {
                setCandidates(candidateData);
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleClick = (id: number) => {
        setApplicantId(id)
        setOpenModal(true);
    }

    const toggleModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="initial"
            variants={pageTransitions}
            className="content-container"
        >
            <div className='job-content-container'>
                <div>
                    <div className='applicant-container'>
                        <h2 className='main-title'>Applicants</h2>
                        <motion.div className="applicant-table-container" variants={staggerTransitions}>
                            <article>
                                <motion.div className="applicant-table-header" variants={tableTransitions}>
                                    <h3>Name</h3>
                                    <div className="vertical"></div>
                                    <h3>Job Title</h3>
                                    <div className="vertical"></div>
                                    <h3>Location</h3>
                                </motion.div>
                            </article>
                            <div>
                                {candidates?.map((applicant) => {
                                    const { id, name, currentJob, location } = applicant;
                                    return (
                                        <motion.div onClick={() => handleClick(id)} variants={tableTransitions}>
                                            <ApplicantTable id={id} name={name} currentJob={currentJob} location={location} />
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>
                    <StyledModal
                        isOpen={openModal}
                        onBackgroundClick={toggleModal}
                        onEscapeKeydown={toggleModal}
                    >
                        <motion.div variants={modalTransitions}>
                            <button onClick={() => setOpenModal(false)} className="standard-button">
                                Close
                            </button>
                            {applicantId && candidates?.filter(applicant => applicant.id.toString().includes(`${applicantId}`)).map(selectedApplicant => (
                                <ApplicantCard
                                    id={selectedApplicant.id}
                                    name={selectedApplicant.name}
                                    currentJob={selectedApplicant.currentJob}
                                    location={selectedApplicant.location}
                                    email={selectedApplicant.email}
                                    phoneNumber={selectedApplicant.phoneNumber}
                                    cvLink={selectedApplicant.cvLink}
                                />
                            ))}
                        </motion.div>
                    </StyledModal>
                </div>
                <div className='job-container'><h2>Job Description</h2>
                    {singleVacancy &&
                        <article key={singleVacancy.id} className='single-job-container' >
                            <SingleJobContainer className='single-job-header'>
                                <div className='single-job-title'>
                                    <h1>{singleVacancy.title}</h1>
                                    <h4>End Date: {singleVacancy.endDate}</h4>
                                </div>
                                <h2>{singleVacancy.company}</h2>
                                <h4>Location: {singleVacancy.location}</h4>
                                <h5>{singleVacancy.companyDescription}</h5>
                                <h4>Salary: £{singleVacancy.salaryMin}-£{singleVacancy.salaryMax} per annum</h4>
                                <h4>{singleVacancy.applicants} applicants</h4>
                            </SingleJobContainer>
                            <SingleJobContainer className='single-job-header'>
                                <h2>Description</h2>
                                <h5>{singleVacancy.jobDescription}</h5>
                            </SingleJobContainer>
                            <SingleJobContainer className='single-job-header'>
                                <h3>Essential Requirements</h3>
                                <ul>
                                    {singleVacancy.requirementsEssential.map(essential => {
                                        return <li>{essential}</li>
                                    })}
                                </ul>
                                <h3>Desirable</h3>
                                <ul>
                                    {singleVacancy.requirementsDesirable.map(desirable => {
                                        return <li>{desirable}</li>
                                    })}
                                </ul>
                                <h3>Key Responsibilities</h3>
                                <ul>
                                    {singleVacancy.responsibilities.map(responsibility => {
                                        return <li>{responsibility}</li>
                                    })}
                                </ul>
                            </SingleJobContainer>
                        </article>
                    }
                </div>
            </div>
        </motion.div>
    );
}
