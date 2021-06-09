import { Link } from 'react-router-dom';
import './VacancyCard.css'

interface IVacancyCard {
    id: number,
    title: string,
    company: string,
    location: string,
    salary: number,
    applicants: number,
    endDate: string,
}

export const VacancyCard: React.FC<IVacancyCard> = ({ id, title, company, location, salary, applicants, endDate }): React.ReactElement => {
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
                <h4 className='vacancy-card-media-remove'>{applicants}</h4>
                <div className="vertical"></div>
                <h4 className='vacancy-card-media-remove'>{endDate}</h4>
            </Link>
        </article>
    )
}
