import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import "./Graph.css";
import { dummyData } from "../../utils/dataCollection";

interface IGraph {
	title: string,
	description: String,
}

export const Graph: React.FC<IGraph> = ({ title, description }): React.ReactElement => {
	return (
		<div className="graph-container">
			<h2>{title}</h2>
			<h4 className="graph-description">{description}</h4>
			<ResponsiveContainer width="100%" aspect={3}>
				<AreaChart
					width={500}
					height={300}
					data={dummyData}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Area
						type="monotone"
						dataKey="Applicants"
						stroke="#82ca9d"
						fill="var(--clr-primary-blue)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}

export default Graph;
