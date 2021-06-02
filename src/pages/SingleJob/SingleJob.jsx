import React from 'react'
import { useParams } from 'react-router-dom';
import jobDataFull from '../JobVacancies/JobVacancyFull';
import './SingleJob.css';

function SingleJob() {
    const { id } = useParams();
    const job = jobDataFull.filter(job => job.id == id )

    return (
        <div className='content-container'>
            {job.map(item => 
                <article key={item.id} className='single-job-container' >
                    <h2>{item.title}</h2>
                    <h3>{item.company}</h3>
                    <h5>{item.companyDescription}</h5>
                    <h4>Location: {item.location}</h4>
                    <h4>Salary Range: £{item.salaryMin}-£{item.salaryMax} per annum</h4>
                    <h4>{item.applicants} current applicants</h4>
                    <h4>End Date: {item.endDate}</h4>
                    <h3>Description</h3>
                    <h5>{item.jobDescription}</h5>
                    <h3>Essential Requirements</h3>
                    <ul>
                        {item.requirementsEssential.map(essential => {
                            return <li>{essential}</li>
                        })}
                    </ul>
                    <h3>Desirable</h3>
                    <ul>
                        {item.requirementsDesirable.map( desirable =>{
                            return <li>{desirable}</li>
                        })}
                    </ul>
                    <h3>Key Responsibilities</h3>
                    <ul>
                        {item.responsibilities.map( responsibility =>{
                            return <li>{responsibility}</li>
                        })}
                    </ul>
                </article>
                )}            
        </div>
    )
}

export default SingleJob
