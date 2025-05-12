import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from './modal.module.css'
type modalProps = {
    showModal: boolean,
}
const modalVariants = {
    hidden: {
        opacity: 0
    },

    visible: {
        opacity: 1
    }
}
const descVariants = {
    hidden: {
        opacity: 0,
        y:"-100vh"
    },

    visible: {
        opacity: 1,
        y:"200px",
        transition:{
            delay:0.5
        }
    }
}

const Modal = ({ showModal }: modalProps) => {
    return (
        <AnimatePresence>
            {showModal &&
                <motion.div
                    className={styles.modal}
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible" 
                    exit="hidden">
                    <motion.div className={styles.desc}
                    variants={descVariants}
                    >
                        <div>
                            want to make another pizza ?
                        </div>
                        <Link to={'/'} className={styles.link} >
                            Start Again
                        </Link>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default Modal;