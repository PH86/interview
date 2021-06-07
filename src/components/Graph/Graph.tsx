import React from "react";
import "./Graph.css";
import {
	AreaChart,
	BarChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Bar,
} from "recharts";
import { IApplicantData } from "../../utils/dataCollection";

interface ILineGraph {
	title: string;
	description: String;
	data: Array<IApplicantData>;
}

interface IBarGraph {
	title: string;
	description: String;
	data: Array<IBarChartData>;
}

export interface IBarChartData {
	location: string;
	AmountOfApplicants: number;
}

export const LineGraph: React.FC<ILineGraph> = ({
	title,
	description,
	data,
}): React.ReactElement => {
	return (
		<div className="graph-container">
			<h2>{title}</h2>
			<h4 className="graph-description">{description}</h4>
			<ResponsiveContainer width="100%" aspect={3}>
				<AreaChart
					width={500}
					height={300}
					data={data}
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
};

export const BarGraph: React.FC<IBarGraph> = ({
	title,
	description,
	data,
}): React.ReactElement => {
	return (
		<div className="graph-container">
			<h2>{title}</h2>
			<h4 className="graph-description">{description}</h4>
			<ResponsiveContainer width="100%" height="74%">
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="location" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="AmountOfApplicants" fill="var(--clr-primary-blue)" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};
