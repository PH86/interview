import React from "react";
import "./Graph.css";
import styled from "styled-components";
import { shadow } from "themes/theme";
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
  description: string;
  data: Array<IApplicantData | IBarChartAverageSalaryData>;
  dataKeyXAxis: string;
  dataKeyArea: string | number;
}

interface IBarGraph {
  title: string;
  description: string;
  data: Array<IBarChartApplicantData | IBarChartAverageSalaryData>;
}

const GraphContainer = styled.div`
  box-shadow: ${shadow};
`;

export interface IBarChartApplicantData {
  location: string;
  AmountOfApplicants: number;
}

export interface IBarChartAverageSalaryData {
  location: string;
  AverageSalary: number;
}

export const DashboardLineGraph: React.FC<ILineGraph> = ({
  title,
  description,
  data,
  dataKeyXAxis,
  dataKeyArea,
}: ILineGraph): React.ReactElement => {
  return (
    <GraphContainer className="graph-container">
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
          <XAxis dataKey={dataKeyXAxis} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey={dataKeyArea}
            stroke="#82ca9d"
            fill="var(--clr-primary-blue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export const ReportingStudioLineGraph: React.FC<ILineGraph> = ({
  title,
  description,
  data,
  dataKeyXAxis,
  dataKeyArea,
}: ILineGraph): React.ReactElement => {
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
          <XAxis dataKey={dataKeyXAxis} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey={dataKeyArea}
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
}: IBarGraph): React.ReactElement => {
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
