import React from "react";
import Modal from "styled-react-modal";
import { jobData } from "../../utils/DummyVacancyData";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import "./JobVacancies.css";
import "../../components/VacancyCard/VacancyCard.css";
import { VacancyForm } from "../../components/VacancyForm/VacancyForm";
import { AppContext } from "../../context";
import { VacancyFull } from "../../components/VacancyFull/VacancyFull";
import { backgroundColor } from "../../themes/theme";

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

	const toggleModal = () => {
		setOpenModal(!openModal)
	}

	return (
		<div className="content-container">
			<h1>Job Vacancies</h1>
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
				{jobData.map((job) => {
					const { id, title, company, location, salary, applicants, endDate } =
						job;
					return (
						<VacancyCard
							id={id}
							title={title}
							company={company}
							salary={salary}
							location={location}
							applicants={applicants}
							endDate={endDate}
						/>
					);
				})}
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
		</div>
	);
};
