import React from "react";
import Modal from "styled-react-modal";
import { motion } from "framer-motion";
import { pageTransitions, staggerTransitions, tableTransitions, modalTransitions } from "utils/Animations";
import { VacancyForm, VacancyFull } from "components";
import "./JobVacancies.css";
import "components/VacancyCard/VacancyCard.css";
import { AppContext } from "context";
import { IJobData, jobData } from "../../utils/DummyVacancyData";
import { backgroundColor } from "themes/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-duotone-svg-icons';

import { JobVacanciesList } from "./components/JobVacanciesList";

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

// export const useFetch = (url, method, headers = {}, body = null) => {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       await fetch(url, {
//         method,
//         headers,
//         body,
//       })
//         .then((res) => setResponse(res.json()))
//         .catch((err) => setError(err))
//         .finally(() => setIsLoading(false));
//     };
//     fetchData();
//   }, [url]);
//   return { response, error, isLoading };
// };


export const JobVacancies: React.FC<{}> = (): React.ReactElement => {
    const { openModal, setOpenModal, showVacancy } = React.useContext(AppContext);
    const [search, setSearch] = React.useState<string>('');
    const [searchFilter, setSearchFilter] = React.useState<string>('title');
    const [vacancies, setVacancies] = React.useState<IJobData[]>([]);

    // React.useEffect(() => {
    //     fetch('http://interview-server-heroku.herokuapp.com/vacancies', {headers: {'Content-Type': 'application/json'}})
    //         .then((response) => {
    //             response.json()
    //         })
    //         .then((response) => {
    //             let data;
    //             data = response.json()
    //             console.log(data);
    //         })
    // },[])

	React.useEffect(() => {
		const fetchData = async () => {
			await fetch('http://interview-server-heroku.herokuapp.com/vacancies', {headers: {'Content-Type': 'application/json'}})
			.then((res) => {
				res.json()
				console.log(res);
				
			})
			.catch((err) => {
				console.log(err);
				
			})
		};
		fetchData();
		}, []);

    const toggleModal = () => {
        setOpenModal(!openModal)
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
						<JobVacanciesList data={jobData} search={search} searchFilter={searchFilter}  />
					</div>
				</motion.div>
			</motion.div>
			<button onClick={() => setOpenModal(true)} className="standard-button">
				Add Vacancy
			</button>
			<StyledModal
				isOpen={openModal}
				onBackgroundClick={toggleModal}
				onEscapeKeydown={toggleModal}
			>
				<motion.div variants={modalTransitions}>
					<button onClick={() => setOpenModal(false)} className="standard-button">
						Close
					</button>
					{showVacancy ? <VacancyFull /> : <VacancyForm />}
				</motion.div>
			</StyledModal>
		</motion.div>
	);
};
