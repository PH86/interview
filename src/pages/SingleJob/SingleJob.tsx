import React from "react";
import "./SingleJob.css";
import Modal from "styled-react-modal";
import styled from "styled-components";
import { motion } from "framer-motion";
import { shadow } from '../../themes/theme';
import { useParams } from "react-router-dom";
import { applicants } from "../../utils/Applicants";
import { jobDataFull } from "../../utils/JobVacancyFull";
import { pageTransitions } from "../../utils/Animations";
import { backgroundColor } from "../../themes/theme";
import { ApplicantCard } from '../../components/Applicant/ApplicantCard';
import { ApplicantTable } from "../../components/Applicant/ApplicantTable";

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
    const job = jobDataFull.filter((job) => job.id.toString() === id);

    const handleClick = (id: number) => {
        setApplicantId(id)
        setOpenModal(true);
    }

    const toggleModal = () => {
		setOpenModal(!openModal)
	}

    return (
        <motion.div 
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransitions}
            className="content-container"
		>
            <div className='job-content-container'>
                <div>
                    <div className='applicant-container'>
                        <h2 className='main-title'>Applicants</h2>
                        <div className="applicant-table-container">
                            <article>
                                <div className="applicant-table-header">
                                    <h3>Name</h3>
                                    <div className="vertical"></div>
                                    <h3>Job Title</h3>
                                    <div className="vertical"></div>
                                    <h3>Location</h3>
                                </div>
                            </article>
                            <div>
                                {applicants.map((applicant) => {
                                    const { id, name, currentJob, location } = applicant;
                                    return ( 
                                        <div onClick={() => handleClick(id)}>
                                            <ApplicantTable id={id} name={name} currentJob={currentJob} location={location} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <StyledModal
                        isOpen={openModal}
                        onBackgroundClick={toggleModal}
                        onEscapeKeydown={toggleModal}
                    >
                        <div>
                            <button onClick={() => setOpenModal(false)} className="standard-button">
                                Close
                            </button>
                            {applicantId && applicants.filter(applicant => applicant.id.toString().includes(`${applicantId}`)).map(selectedApplicant => (
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
                            
                        </div>
                    </StyledModal>
                </div>
                <div className='job-container'><h2>Job Description</h2>
                    {job.map(item =>
                        <article key={item.id} className='single-job-container' >
                            <SingleJobContainer className='single-job-header'>
                                <div className='single-job-title'>
                                    <h1>{item.title}</h1>
                                    <h4>End Date: {item.endDate}</h4>
                                </div>
                                <h2>{item.company}</h2>
                                <h4>Location: {item.location}</h4>
                                <h5>{item.companyDescription}</h5>
                                <h4>Salary: £{item.salaryMin}-£{item.salaryMax} per annum</h4>
                                <h4>{item.applicants} applicants</h4>
                            </SingleJobContainer>
                            <SingleJobContainer className='single-job-header'>
                                <h2>Description</h2>
                                <h5>{item.jobDescription}</h5>
                            </SingleJobContainer>
                            <SingleJobContainer className='single-job-header'>
                                <h3>Essential Requirements</h3>
                                <ul>
                                    {item.requirementsEssential.map(essential => {
                                        return <li>{essential}</li>
                                    })}
                                </ul>
                                <h3>Desirable</h3>
                                <ul>
                                    {item.requirementsDesirable.map(desirable => {
                                        return <li>{desirable}</li>
                                    })}
                                </ul>
                                <h3>Key Responsibilities</h3>
                                <ul>
                                    {item.responsibilities.map(responsibility => {
                                        return <li>{responsibility}</li>
                                    })}
                                </ul>
                            </SingleJobContainer>
                        </article>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
