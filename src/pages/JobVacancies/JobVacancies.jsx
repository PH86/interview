import React from 'react'
import jobData from '../../components/VacancyCard/DummyVacancyData';
import VacancyCard from '../../components/VacancyCard/VacancyCard';
import './JobVacancies.css';
import '../../components/VacancyCard/VacancyCard.css';


function JobVacancies() {
    return (
        <div className='content-container'>
            <h1>Job Vacancies</h1>
            <button className='standard-btn'>Add Vacancy</button>
            <h2>Add vacancy button will bring up form to add vacancy</h2>
            <h2>We could add some stats in here</h2>
            <h2>We may want search/filtering options for vacancies</h2>
            <div className='vacancy-table-container'>
            <article >
            <div  className='vacancy-table-header'>
                <h3>Job Title</h3>
                <div className="vertical"></div>
                <h3>Company</h3>
                <div className="vertical"></div>
                <h3>Location</h3>
                <div className="vertical"></div>
                <h3>Salary</h3>
                <div className="vertical"></div>
                <h3>Number of Applicants</h3>
                <div className="vertical"></div>
                <h3>End Date</h3>
                </div>
        </article>
            {jobData.map((job) => {
                const {id,
                title,
                company,
                location,
                salary,
                applicants,
                endDate} = job;
    return (
        <VacancyCard id={id} title={title} company={company} salary={salary} location={location} applicants={applicants} endDate = {endDate}/>
    )
            })}
            </div>
        </div>
    )
}

export default JobVacancies
