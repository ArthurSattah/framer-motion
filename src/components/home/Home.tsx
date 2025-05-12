import { Link } from 'react-router-dom';
import styles from './home.module.css'
import { motion } from 'framer-motion';
import Loader from '../loader/Loader';

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            delay: 0.5,
            duration: 1.5,
        }
    },
    exit: {
        x: "-100vw",
        transition: {
            ease: "easeInOut"
        }
    }
}
const buttonVariants = {
    hover: {
        // scale: [1, 1.1, 1, 1.1, 1],
        scale: 1.1,
        textShadow: "0 0 8px white",
        boxShadow: "0 0 8px white",
        transition: {

            repeatType: 'reverse' as const,
            repeat: Infinity,
            duration: 0.3,
        }
    }
}
const Home = () => {
    return (
        <motion.div
            className={styles.home}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">

            <div className={styles.title}>
                Welcom To Pizza Joint
            </div>

            <Link to={'/base'} className={styles.outLink} >
                <motion.div className={styles.link}
                    variants={buttonVariants}
                    whileHover="hover">

                    Create your pizza
                </motion.div>
            </Link>
            <Loader/>
        </motion.div>
    );
}

export default Home;