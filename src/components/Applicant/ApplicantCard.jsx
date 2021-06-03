import React from 'react';
import './ApplicantCard.css';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { CgFileDocument } from 'react-icons/cg';

function ApplicantCard({ id, name, currentJob, location, email, phoneNumber, cvLink }) {
    return (
        <article key={id} className='applicant-card-container'>
            <h1 className='applicant-name'>{name}</h1>
            <h2 className='applicant-job'>{currentJob}</h2>
            <h4 className='applicant-location'>{location}</h4>
            <h4 className='applicant-email'><HiOutlineMail className='applicant-icon' />{email}</h4>
            <h4 className='applicant-number'><FiPhone className='applicant-icon' />{phoneNumber}</h4>
            <h4 className='applicant-cv'><CgFileDocument className='applicant-icon' /> <a href={cvLink} target="_blank">{cvLink}</a></h4>
        </article>
    )
}

export default ApplicantCard
