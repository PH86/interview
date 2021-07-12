import { DashCard, DashboardLineGraph } from "components";
import { motion } from "framer-motion";
import { dummyData } from "utils/dataCollection";
import { pageTransitions } from "utils/Animations";
import "./Dashboard.css";

export const Dashboard: React.FC = (): React.ReactElement => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      variants={pageTransitions}
      className="content-container"
    >
      <h1>Dashboard</h1>
      <div className="dashboard-container">
        <DashboardLineGraph
          title="Applicants"
          description="Applicants over the last 7 days"
          data={dummyData}
          dataKeyXAxis="name"
          dataKeyArea="Applicants"
        />
        <DashCard title="Current Vacancies" content="9" />
        <DashCard title="Current Applicants" content="40" />
        <DashCard title="Interviews Today" content="4" />
        <DashCard title="Callbacks Required" content="10" />
      </div>
      <h1>to do list or calendar could go here?</h1>
    </motion.div>
  );
};
