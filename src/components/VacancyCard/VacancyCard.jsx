import React from 'react'
import { Link } from 'react-router-dom'; 
import './VacancyCard.css'

function VacancyCard({id, title, company, applicants, endDate}) {
    return (
        <article key={id} >
            <Link to={`/interview/jobs/${id}`} className='vacancy-card-container'>
                <h3>{title}</h3>
                <h3>{company}</h3>
                <h3>{applicants}</h3>
                <h3>{endDate}</h3>
            </Link>
        </article>
    )
}

export default VacancyCard
