import { DashCard, DashboardLineGraph } from "components";
import { motion } from "framer-motion";
import { dummyData } from "utils/dataCollection";
import { pageTransitions } from "utils/Animations";
import {
  faPhoneSquare,
  faCalendarDay,
  faUsers,
  faNewspaper,
  faAddressCard,
} from "@fortawesome/pro-duotone-svg-icons";
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
        <DashCard title="Active Vacancies" content="9" icon={faNewspaper} />
        <DashCard title="Ending This Week" content="3" icon={faNewspaper} />
        <DashCard title="Total Applicants" content="40" icon={faUsers} />
        <DashCard title="New Applicants" content="6" icon={faAddressCard} />
        <DashCard title="Interviews Today" content="4" icon={faCalendarDay} />
        <DashCard
          title="Callbacks Required"
          content="10"
          icon={faPhoneSquare}
        />
      </div>
      <h1>to do list to go here</h1>
    </motion.div>
  );
};
