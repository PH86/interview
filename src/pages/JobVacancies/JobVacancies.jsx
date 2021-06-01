import React from 'react'
import jobData from '../../components/VacancyCard/DummyVacancyData';
import VacancyCard from '../../components/VacancyCard/VacancyCard';

function JobVacancies() {
    return (
        <div className='content-container'>
            <h1>Job Vacancies</h1>
            <h2>table headings to add here</h2>
            {jobData.map((job) => {
                const {id,
                title,
                company,
                applicants,
                endDate} = job;
    return (
        <VacancyCard id={id} title={title} company={company} applicants={applicants} endDate = {endDate}/>
    )
            })}
        </div>
    )
}

export default JobVacancies
