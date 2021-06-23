import { motion } from "framer-motion";
import { pageTransitions } from "../../utils/Animations";

export const UserSettings: React.FC<{}> = (): React.ReactElement => {
    return (
        <motion.div 
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransitions}
            className="content-container"
		>
            <h1>User Settings</h1>
        </motion.div>
    )
}
