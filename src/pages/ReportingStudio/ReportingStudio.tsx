import Graph from '../../components/Graph/Graph'
import "./ReportingStudio.css"

export const ReportingStudio: React.FC<{}> = (): React.ReactElement => {
    return (
        <div className='content-container'>
            <h1>Reporting Studio</h1>
            <div className='reporting-container'>
                <Graph
					title="Total Applicants"
					description="Total Applicants over the last 7 days"
				/>
                <Graph
					title="Total Applicants"
					description="Total Applicants over the last 7 days"
				/>
                <Graph
					title="Total Applicants"
					description="Total Applicants over the last 7 days"
				/>
                <Graph
					title="Total Applicants"
					description="Total Applicants over the last 7 days"
				/>
            </div>
        </div>
    )
}
