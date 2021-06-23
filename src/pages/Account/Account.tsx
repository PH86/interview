import { motion } from "framer-motion";
import { pageTransitions } from "../../utils/Animations";

export const Account: React.FC<{}> = (): React.ReactElement => {
    return (
        <motion.div 
			initial="out"
			animate="in"
			exit="out"
            variants={pageTransitions}
			className="content-container"
		>
            <h1>Account</h1>
        </motion.div>
    )
}
