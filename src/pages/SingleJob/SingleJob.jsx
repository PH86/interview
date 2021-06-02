import React from 'react'
import { useParams } from 'react-router-dom';
import jobDataFull from '../JobVacancies/JobVacancyFull';
import './SingleJob.css';

function SingleJob() {

    const { id } = useParams();

    const job = jobDataFull.filter(job => job.id == id )

    // id: 1,
    // title:'Software Developer',
    // company: 'Green',
    // location: 'Remote',
    // salary: 45000,
    // applicants: 5,
    // endDate: '11/11/2021',
  	// jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	// companyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	// salaryMin: 40000,
    // salaryMax: 45000,
    // requirementsEssential: ['Lorem ipsum dolor sit amet','consectetur adipiscing elit','sed do eiusmod tempor incididunt ut labore et dolore magna aliqua','Ut enim ad minim veniam'],
    // requirementsDesirable: ['Lorem ipsum dolor sit amet','consectetur adipiscing elit','sed do eiusmod tempor incididunt ut labore et dolore magna aliqua','Ut enim ad minim veniam'],
    // responsibilities: 
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
