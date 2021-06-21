import React from 'react';
import './CandidateSearch.css';
import Modal from "styled-react-modal";
import { ApplicantCard } from '../../components/Applicant/ApplicantCard';
import { ApplicantTable } from '../../components/Applicant/ApplicantTable';
import { applicants } from '../../utils/Applicants';
import { backgroundColor } from "../../themes/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-duotone-svg-icons';

const StyledModal = Modal.styled`
    width: 90vw;
    height: 90vh;
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${backgroundColor};
    overflow-y: scroll;
`;

export const CandidateSearch: React.FC<{}> = (): React.ReactElement => {
    const [search, setSearch] = React.useState('');
    const [searchFilter, setSearchFilter] = React.useState<string>('name');
    const [openModal, setOpenModal] = React.useState<boolean>(false);
    const [applicantId, setApplicantId] = React.useState<number>();

    const handleClick = (id: number) => {
        setApplicantId(id)
        setOpenModal(true);
    }

    const toggleModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <div className='content-container'>
            <h1>Candidate Search</h1>
            <div className='search-container'>
                <div className='search-bar'>
                    <input
                        type='text'
                        id='candidateSearch'
                        name='candidateSearch'
                        placeholder='Enter your search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FontAwesomeIcon className='search-icon' icon={faSearch} />
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
                <div className="applicant-table-container">
                    <article>
                        <div className="applicant-table-header">
                            <h3>Name</h3>
                            <div className="vertical"></div>
                            <h3>Job Title</h3>
                            <div className="vertical"></div>
                            <h3>Location</h3>
                        </div>
                    </article>
                    {search && searchFilter === 'name' && applicants.filter(applicant => applicant.name.toLowerCase().includes(`${search}`.toLowerCase())).map(filteredApplicant => (
                        <div onClick={() => handleClick(filteredApplicant.id)}>
                            <ApplicantTable
                                id={filteredApplicant.id}
                                name={filteredApplicant.name}
                                currentJob={filteredApplicant.currentJob}
                                location={filteredApplicant.location}
                            />
                        </div>
                    ))}
                    {search && searchFilter === 'currentJob' && applicants.filter(applicant => applicant.currentJob.toLowerCase().includes(`${search}`.toLowerCase())).map(filteredApplicant => (
                        <div onClick={() => handleClick(filteredApplicant.id)}>
                            <ApplicantTable
                                id={filteredApplicant.id}
                                name={filteredApplicant.name}
                                currentJob={filteredApplicant.currentJob}
                                location={filteredApplicant.location}
                            />
                        </div>
                    ))}
                    {search && searchFilter === 'location' && applicants.filter(applicant => applicant.location.toLowerCase().includes(`${search}`.toLowerCase())).map(filteredApplicant => (
                        <div onClick={() => handleClick(filteredApplicant.id)}>
                            <ApplicantTable
                                id={filteredApplicant.id}
                                name={filteredApplicant.name}
                                currentJob={filteredApplicant.currentJob}
                                location={filteredApplicant.location}
                            />
                        </div>
                    ))}
                </div>
                <StyledModal
                    isOpen={openModal}
                    onBackgroundClick={toggleModal}
                    onEscapeKeydown={toggleModal}
                >
                    <div>
                        <button onClick={() => setOpenModal(false)} className="standard-button">
                            Close
                        </button>
                        {applicantId && applicants.filter(applicant => applicant.id.toString().includes(`${applicantId}`)).map(selectedApplicant => (
                            <ApplicantCard
                                id={selectedApplicant.id}
                                name={selectedApplicant.name}
                                currentJob={selectedApplicant.currentJob}
                                location={selectedApplicant.location}
                                email={selectedApplicant.email}
                                phoneNumber={selectedApplicant.phoneNumber}
                                cvLink={selectedApplicant.cvLink}
                            />
                        ))}
                    </div>
                </StyledModal>
            </div>
        </div>
    )
}
