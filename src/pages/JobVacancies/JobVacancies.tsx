import React from "react";
import Modal from "styled-react-modal";
import { motion } from "framer-motion";
import { pageTransitions, staggerTransitions, tableTransitions, modalTransitions } from "utils/Animations";
import { VacancyCard, VacancyForm, VacancyFull } from "components";
import "./JobVacancies.css";
import "components/VacancyCard/VacancyCard.css";
import { AppContext } from "context/AppContext";
import { IJobData } from "../../utils/DummyVacancyData";
import { backgroundColor } from "themes/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-duotone-svg-icons';
import { useAppContext } from "hooks/useAppContext";

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

export const JobVacancies: React.FC<{}> = (): React.ReactElement => {
    const { openModal, setOpenModal, showVacancy } = useAppContext();
    
    console.log(openModal);
    
    const [search, setSearch] = React.useState<string>('');
    const [searchFilter, setSearchFilter] = React.useState<string>('title');
    const [vacancies, setVacancies] = React.useState<IJobData[]>([]);

    React.useEffect(() => {
        fetch(`${process.env.BASE_URL}/vacancies`, {headers: {'Content-Type': 'application/json'}})
            .then((response) => (response.json())
			.then(setVacancies)
			);
    },[])

    const toggleModal = () => {
        setOpenModal()
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="initial"
            variants={pageTransitions}
            className="content-container"
        >
            <h1>Job Vacancies</h1>
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
                            Job Title
                            <input
                                type='radio'
                                checked={searchFilter === 'title'}
                                value='title'
                                onChange={(e) => setSearchFilter(e.target.value)}
                            />
                            <span className='checkmark'></span>
                        </label>
                    </div>
                    <div className='radio-container-div'>
                        <label className='radio-container'>
                            Company
                            <input
                                type='radio'
                                checked={searchFilter === 'company'}
                                value='company'
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
            </div>
            <motion.div
                className="vacancy-table-container"
                initial='initial'
                animate='animate'
                exit={{ opacity: 0 }}
            >
                <motion.div variants={staggerTransitions}>
                    <article>
                        <motion.div className="vacancy-table-header" variants={tableTransitions}>
                            <h3>Job Title</h3>
                            <div className="vertical"></div>
                            <h3>Company</h3>
                            <div className="vertical"></div>
                            <h3>Location</h3>
                            <div className="vertical"></div>
                            <h3>Salary</h3>
                            <div className="vertical"></div>
                            <h3 className='vacancy-card-media-remove'>Number of Applicants</h3>
                            <div className="vertical"></div>
                            <h3 className='vacancy-card-media-remove'>End Date</h3>
                        </motion.div>
                    </article>
                    
                    <div>
                        {vacancies && searchFilter === 'title' && vacancies.filter(vacancy => vacancy.title.toLowerCase().includes(`${search}`.toLowerCase())).map(filteredVacancy => (
                            <motion.div variants={tableTransitions}>
                                <VacancyCard
                                    id={filteredVacancy.id}
                                    title={filteredVacancy.title}
                                    company={filteredVacancy.company}
                                    salary={filteredVacancy.salary}
                                    location={filteredVacancy.location}
                                    applicants={filteredVacancy.applicants}
                                    endDate={filteredVacancy.endDate}
                                />
                            </motion.div>
                        ))}
                        {vacancies && searchFilter === 'company' && vacancies.filter(vacancy => vacancy.company.toLowerCase().includes(`${search}`.toLowerCase())).map(filteredVacancy => (
                            <motion.div variants={tableTransitions}>
                                <VacancyCard
                                    id={filteredVacancy.id}
                                    title={filteredVacancy.title}
                                    company={filteredVacancy.company}
                                    salary={filteredVacancy.salary}
                                    location={filteredVacancy.location}
                                    applicants={filteredVacancy.applicants} endDate={filteredVacancy.endDate}
                                />
                            </motion.div>
                        ))}
                        {vacancies && searchFilter === 'location' && vacancies.filter(vacancy => vacancy.location.toLowerCase().includes(`${search}`.toLowerCase())).map(filteredVacancy => (
                            <motion.div variants={tableTransitions}>
                                <VacancyCard
                                    id={filteredVacancy.id}
                                    title={filteredVacancy.title}
                                    company={filteredVacancy.company}
                                    salary={filteredVacancy.salary}
                                    location={filteredVacancy.location}
                                    applicants={filteredVacancy.applicants}
                                    endDate={filteredVacancy.endDate}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
            <button onClick={() => setOpenModal()} className="standard-button">
                Add Vacancy
            </button>
            <StyledModal
                // TODO:  
                // need to update this isOpen variable
                // For some reason it's not accepting the context value
                isOpen={false}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
            >
                <motion.div variants={modalTransitions}>
                    <button onClick={() => setOpenModal()} className="standard-button">
                        Close
                    </button>
                    {showVacancy ? <VacancyFull /> : <VacancyForm />}
                </motion.div>
            </StyledModal>
        </motion.div>
    );
};
