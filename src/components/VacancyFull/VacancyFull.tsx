import React from 'react'
import { AppContext } from "context/AppContext";
import styled from "styled-components";
import { backgroundColor, textColor } from 'themes/theme'
import { useAppContext } from 'hooks/useAppContext';

const Article = styled.article`
    background-color: ${backgroundColor};
    color: ${textColor};
`;

export const VacancyFull: React.FC<{}> = (): React.ReactElement => {
    const { setOpenModal, setShowVacancy, jobForm, setJobForm } = useAppContext();
    const submitForm = () => {
        setJobForm({
            jobTitle: '',
            companyName: '',
            location: '',
            companyDescription: '',
            salaryMin: '',
            salaryMax: '',
            endDate: '',
            jobDescription: '',
            essentialRequirments: [],
            desiredRequirments: [],
            responsibilities: []
        });
        setShowVacancy();
        setOpenModal();
    }

    return (
        <div>
            <Article className='single-job-container'>
                <div className='single-job-header'>
                    <div className='single-job-title'>
                        <h1>{jobForm?.jobTitle}</h1>
                        <h4>End Date: {jobForm?.endDate}</h4>
                    </div>
                    <h2>{jobForm?.companyName}</h2>
                    <h4>Location: {jobForm?.location}</h4>
                    <h5>{jobForm?.companyDescription}</h5>
                    <h4>Salary: £{jobForm?.salaryMin}-£{jobForm?.salaryMax} per annum</h4>
                </div>
                <div className='single-job-header'>
                    <h2>Description</h2>
                    <h5>{jobForm?.jobDescription}</h5>
                </div>
                <div className='single-job-header'>
                    <h3>Essential Requirements</h3>
                    <ul>
                        {jobForm?.essentialRequirments.map((essential: string) => {
                            return <li>{essential}</li>
                        })}
                    </ul>
                    <h3>Desirable</h3>
                    <ul>
                        {jobForm?.desiredRequirments.map((desirable: string) => {
                            return <li>{desirable}</li>
                        })}
                    </ul>
                    <h3>Key Responsibilities</h3>
                    <ul>
                        {jobForm?.responsibilities.map((responsibility: string) => {
                            return <li>{responsibility}</li>
                        })}
                    </ul>
                </div>
                <button onClick={() => submitForm()} className="standard-button">Submit</button>
                <button onClick={() => setShowVacancy()} className="standard-button">Edit</button>
            </Article>
        </div>
    )
}
