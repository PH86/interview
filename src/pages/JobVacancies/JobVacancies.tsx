import React from "react";
import Modal from "styled-react-modal";
import { motion } from "framer-motion";
import { jobData } from "../../utils/DummyVacancyData";
import { pageTransitions } from "../../utils/Animations";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import "./JobVacancies.css";
import "../../components/VacancyCard/VacancyCard.css";
import { VacancyForm } from "../../components/VacancyForm/VacancyForm";
import { AppContext } from "../../context";
import { VacancyFull } from "../../components/VacancyFull/VacancyFull";
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
overflow-y: scroll;`

export const JobVacancies: React.FC<{}> = (): React.ReactElement => {
	const { openModal, setOpenModal, showVacancy } = React.useContext(AppContext);
	const [search, setSearch] = React.useState<string>('');
	const [searchFilter, setSearchFilter] = React.useState<string>('title');

	const toggleModal = () => {
		setOpenModal(!openModal)
	}

	return (
		<motion.div 
			initial="out"
			animate="in"
			exit="out"
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
			<div className="vacancy-table-container">
				<article>
					<div className="vacancy-table-header">
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
					</div>
				</article>
				<div>
					{searchFilter === 'title' && jobData.filter(vacancy => vacancy.title.toLowerCase().includes(`${search}`.toLowerCase())).map(filteredVacancy => (
						<VacancyCard
							id={filteredVacancy.id}
							title={filteredVacancy.title}
							company={filteredVacancy.company}
							salary={filteredVacancy.salary}
							location={filteredVacancy.location}
							applicants={filteredVacancy.applicants}
							endDate={filteredVacancy.endDate}
						/>
					))}
					{searchFilter === 'company' && jobData.filter(vacancy => vacancy.company.toLowerCase().includes(`${search}`.toLowerCase())).map(filteredVacancy => (
						<VacancyCard
							id={filteredVacancy.id}
							title={filteredVacancy.title}
							company={filteredVacancy.company}
							salary={filteredVacancy.salary}
							location={filteredVacancy.location}
							applicants={filteredVacancy.applicants} endDate={filteredVacancy.endDate}
						/>
					))}
					{searchFilter === 'location' && jobData.filter(vacancy => vacancy.location.toLowerCase().includes(`${search}`.toLowerCase())).map(filteredVacancy => (
						<VacancyCard
							id={filteredVacancy.id}
							title={filteredVacancy.title}
							company={filteredVacancy.company}
							salary={filteredVacancy.salary}
							location={filteredVacancy.location}
							applicants={filteredVacancy.applicants}
							endDate={filteredVacancy.endDate}
						/>
					))}
				</div>
			</div>
			<button onClick={() => setOpenModal(true)} className="standard-button">
				Add Vacancy
			</button>
			<StyledModal
				isOpen={openModal}
				onBackgroundClick={toggleModal}
				onEscapeKeydown={toggleModal}
			>
				<div>
					<button onClick={() => setOpenModal(false)} className="standard-button">
						Close
					</button>
					{showVacancy ? <VacancyFull /> : <VacancyForm />}
				</div>
			</StyledModal>
		</motion.div>
	);
};
