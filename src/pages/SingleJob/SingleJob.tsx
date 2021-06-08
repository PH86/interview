import React from "react";
import "./SingleJob.css";
import { useParams } from "react-router-dom";
import { applicants } from "../../utils/Applicants";
import { jobDataFull } from "../../utils/JobVacancyFull";
import { ApplicantCard } from '../../components/Applicant/ApplicantCard';


export const SingleJob: React.FC<{}> = (): React.ReactElement => {
	const { id } = useParams<{id: string}>();
	const job = jobDataFull.filter((job) => job.id.toString() === id);

	return (
		<div className='content-container'>
            <div className='job-content-container'>
                <div className='applicant-container'>
                    <h2 className='main-title'>Applicants</h2>
                    {applicants.map((applicant) => {
                        const { id, name, currentJob, location, email, phoneNumber, cvLink } = applicant;
                        return (
                            <ApplicantCard id={id} name={name} currentJob={currentJob} location={location} email={email} phoneNumber={phoneNumber} cvLink={cvLink} />
                        )
                    })}
                </div>
                <div className='job-container'><h2>Job Description</h2>
                    {job.map(item =>
                        <article key={item.id} className='single-job-container' >
                            <div className='single-job-header'>
                                <div className='single-job-title'>
                                    <h1>{item.title}</h1>
                                    <h4>End Date: {item.endDate}</h4>
                                </div>
                                <h2>{item.company}</h2>
                                <h4>Location: {item.location}</h4>
                                <h5>{item.companyDescription}</h5>
                                <h4>Salary: £{item.salaryMin}-£{item.salaryMax} per annum</h4>
                                <h4>{item.applicants} applicants</h4>
                            </div>
                            <div className='single-job-header'>
                                <h2>Description</h2>
                                <h5>{item.jobDescription}</h5>
                            </div>
                            <div className='single-job-header'>
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
                            </div>
                        </article>
                    )}
                </div>
            </div>
        </div>
	);
}
