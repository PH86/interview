import "./ReportingStudio.css";
import {
	BarGraph,
	IBarChartData,
	LineGraph,
} from "../../components/Graph/Graph";
import { dummyData } from "../../utils/dataCollection";
import { jobData } from "../../utils/DummyVacancyData";

export const ReportingStudio: React.FC<{}> = (): React.ReactElement => {
	const dummyLocationData = getFormattedJobsPerLocationObjects();
	return (
		<div className="content-container">
			<h1>Reporting Studio</h1>
			<div className="reporting-container">
				<LineGraph
					title="Total Applicants"
					description="Total Applicants over the last 7 days"
					data={dummyData}
				/>
				<BarGraph
					title="Total Applicants Based on Location"
					description="Applicant locations in the last 7 days"
					data={dummyLocationData}
				/>
				<LineGraph
					title="Total Applicants"
					description="Total Applicants over the last 7 days"
					data={dummyData}
				/>
				<LineGraph
					title="Total Applicants"
					description="Total Applicants over the last 7 days"
					data={dummyData}
				/>
			</div>
		</div>
	);
};

const getJobsPerLocationObject = (): Record<string, number> =>
	jobData.reduce((result, jobDatum) => {
		const { location } = jobDatum;
		if (!result[location]) result[location] = 0;

		result[location] += jobDatum.applicants;

		return result;
	}, {} as Record<string, number>);

const getFormattedJobsPerLocationObjects = (): Array<IBarChartData> => {
	const initialData = getJobsPerLocationObject();
	return Object.keys(initialData).map((placeOfWork) => ({
		location: placeOfWork,
		AmountOfApplicants: initialData[placeOfWork],
	}));
};
