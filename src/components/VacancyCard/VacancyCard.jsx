import React from 'react'
import { Link } from 'react-router-dom';
import './VacancyCard.css'

function VacancyCard({ id, title, company, location, salary, applicants, endDate }) {
    return (
        <article key={id} >
            <Link to={`/interview/jobs/${id}`} className='vacancy-card-container'>
                <h4>{title}</h4>
                <div className="vertical"></div>
                <h4>{company}</h4>
                <div className="vertical"></div>
                <h4>{location}</h4>
                <div className="vertical"></div>
                <h4>{`£${salary}`}</h4>
                <div className="vertical"></div>
                <h4>{applicants}</h4>
                <div className="vertical"></div>
                <h4>{endDate}</h4>
            </Link>
        </article>
    )
}

export default VacancyCard
