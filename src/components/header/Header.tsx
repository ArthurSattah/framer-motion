import { Link } from 'react-router-dom';
import styles from './header.module.css'
import { motion } from "framer-motion";
const Header = () => {
    return (
        <div className={styles.header}>
            <motion.div className={styles.moveMe}
                drag={true}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
            >
                P&J
            </motion.div>
            <motion.div
                initial={{ y: "-150px" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", delay: 0.2, stiffness: 120 }}

            >
                <Link to="/framer-motion" className={styles.title}>
                    Pizza Joint
                </Link>
            </motion.div>
        </div>
    );
}

export default Header;