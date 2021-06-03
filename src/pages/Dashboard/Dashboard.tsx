import DashCard from "../../components/DashCard/DashCard";
import Graph from "../../components/Graph/Graph";
import "./Dashboard.css";

export const Dashboard: React.FC<{}> = (): React.ReactElement => {
	return (
		<div className="content-container">
			<h1>Dashboard</h1>
			<div className="dashboard-container">
				<Graph
					title="Applicants"
					description="Applicants over the last 7 days"
				/>
				<div className="dashcards-container">
					<DashCard title="Current Vacancies" content="9" />
					<DashCard title="Current Applicants" content="40" />
					<DashCard title="Interviews Today" content="4" />
					<DashCard title="Callbacks Required" content="10" />
				</div>
			</div>
			<h1>to do list or calendar could go here?</h1>
		</div>
	);
}
