import { Link } from "react-router-dom";
import "./VacancyCard.css";

import { url } from "utils/constants";

interface IVacancyCard {
  id?: string;
  title: string;
  company: string;
  location: string;
  salary: number;
  applicants: string[];
  endDate: string;
}

export const VacancyCard: React.FC<IVacancyCard> = ({
  id,
  title,
  company,
  location,
  salary,
  endDate,
}): React.ReactElement => {
  return (
    <article key={id}>
      <Link to={`${url.jobs}/${id}`} className="vacancy-card-container">
        <h4>{title}</h4>
        <h4>{company}</h4>
        <h4>{location}</h4>
        <h4>{`£${salary}`}</h4>
        <h4 className="vacancy-card-media-remove">{endDate}</h4>
      </Link>
    </article>
  );
};
