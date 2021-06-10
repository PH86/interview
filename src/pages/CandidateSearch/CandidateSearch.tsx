import React from 'react';
import './CandidateSearch.css';
import { ApplicantCard } from '../../components/Applicant/ApplicantCard';
import { applicants } from '../../utils/Applicants';
import { BiSearchAlt } from 'react-icons/bi';

export const CandidateSearch: React.FC<{}> = (): React.ReactElement => {
    const [search, setSearch] = React.useState('');
    const [searchFilter, setSearchFilter] = React.useState<string>('name');

    return (
        <div className='content-container'>
            <h1>Candidate Search</h1>
            <div className='search-container'>
                <div className='search-bar'>
                    <input
                        type='text'
                        id='candidateSearch'
                        name='candidateSearch'
                        placeholder='enter your search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <BiSearchAlt className='search-icon' />
                </div>
                <h3 className='radio-container-title'>Search by:</h3>
                <div className='radio-container-multiple'>
                    <div className='radio-container-div'>
                        <label className='radio-container'>
                            Name
                        <input
                                type='radio'
                                checked={searchFilter === 'name'}
                                value='name'
                                onChange={(e) => setSearchFilter(e.target.value)}
                            />
                            <span className='checkmark'></span>
                        </label>
                    </div>
                    <div className='radio-container-div'>
                        <label className='radio-container'>
                            Job title
                        <input
                                type='radio'
                                checked={searchFilter === 'currentJob'}
                                value='currentJob'
                                onChange={(e) => setSearchFilter(e.target.value)}
                            />
                            <span className='checkmark'></span>
                        </label>
                    </div>
                    <div className='radio-container-div'>
                        <label className='radio-container'>
                            Location
                        <input
                                type='radio'
                                checked={searchFilter === 'location'}
                                value='location'
                                onChange={(e) => setSearchFilter(e.target.value)}
                            />
                            <span className='checkmark'></span>
                        </label>
                    </div>
                </div>
                <div className='search-card-container'>
                    {search && searchFilter === 'name' && applicants.filter(applicant => applicant.name.toLowerCase().includes(`${search}`.toLowerCase())).map(filteredApplicant => (
                        <ApplicantCard id={filteredApplicant.id} name={filteredApplicant.name} currentJob={filteredApplicant.currentJob} location={filteredApplicant.location} email={filteredApplicant.email} phoneNumber={filteredApplicant.phoneNumber} cvLink={filteredApplicant.cvLink} />
                    ))}
                    {search && searchFilter === 'currentJob' && applicants.filter(applicant => applicant.currentJob.toLowerCase().includes(`${search}`.toLowerCase())).map(filteredApplicant => (
                        <ApplicantCard id={filteredApplicant.id} name={filteredApplicant.name} currentJob={filteredApplicant.currentJob} location={filteredApplicant.location} email={filteredApplicant.email} phoneNumber={filteredApplicant.phoneNumber} cvLink={filteredApplicant.cvLink} />
                    ))}
                    {search && searchFilter === 'location' && applicants.filter(applicant => applicant.location.toLowerCase().includes(`${search}`.toLowerCase())).map(filteredApplicant => (
                        <ApplicantCard id={filteredApplicant.id} name={filteredApplicant.name} currentJob={filteredApplicant.currentJob} location={filteredApplicant.location} email={filteredApplicant.email} phoneNumber={filteredApplicant.phoneNumber} cvLink={filteredApplicant.cvLink} />
                    ))}
                </div>
            </div>
        </div>
    )
}
