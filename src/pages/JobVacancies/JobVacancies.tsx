import React from "react";
import Modal from "react-modal";
import { jobData } from "../../utils/DummyVacancyData";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import "./JobVacancies.css";
import "../../components/VacancyCard/VacancyCard.css";
import { VacancyForm } from "../../components/VacancyForm/VacancyForm";

Modal.setAppElement("#root");
export const JobVacancies: React.FC<{}> = (): React.ReactElement => {
	const [openModal, setOpenModal] = React.useState(false);
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
			<button onClick={() => setOpenModal(true)} className="standard-btn">
				Add Vacancy
			</button>
			<Modal
				isOpen={openModal}
				onRequestClose={() => setOpenModal(false)}
				style={{
					overlay: {
						zIndex: 100,
					},
					content: {
						background: "var(--clr-primary-grey)",
					},
				}}
			>
				<div>
					<button onClick={() => setOpenModal(false)} className="standard-btn">
						Close
					</button>
					<VacancyForm />
				</div>
			</Modal>
		</div>
	);
};
