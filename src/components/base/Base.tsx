import styles from './base.module.css'
import BaseItems from '../../data/Base'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
type BaseProps = {
    pizza: { base: string, toppings: string[] }
    addBase: (base: string) => void
}
const containerVariants = {
    hidden: {
        x: "100vw"
    },
    visible: {
        x: 0,
        transition: {
            type: "spring",
            mass: 0.4,
            damping: 8,
        }
    },
    exit:{
        x:"-100vw",
        transition:{
            ease:"easeInOut"
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
const Base = ({ pizza, addBase }: BaseProps) => {
    return (
        <motion.div
            className={styles.base}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">

            <div className={styles.title}>
                Step 1: Choose Your Base
            </div>
            <div className={styles.menus}>
                {
                    BaseItems.map((value, id) => {
                        return (
                            <motion.div
                                key={id}
                                className={styles.baseItem}
                                onClick={() => addBase(value)}
                                whileHover={{ scale: 1.3, originX: 0 }}
                                transition={{ type: 'spring', stiffness: 320, }}>

                                {value === pizza.base ? ">" : ""} {value}
                            </motion.div>
                        )
                    })
                }
            </div>
            {pizza.base !== "" &&
                <motion.div
                    className={styles.next}
                    initial={{ x: "-100vw" }}
                    animate={{ x: "0" }}
                    transition={{ type: "spring", stiffness: 120 }}>

                    <Link to="/toppings" className={styles.outLink}>
                        <motion.div className={styles.link}
                            variants={buttonVariants}
                            whileHover="hover">

                            Next
                        </motion.div>
                    </Link>

                </motion.div>
            }

        </motion.div >
    );
}

export default Base;