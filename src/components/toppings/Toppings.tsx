import styles from './topping.module.css'
import ToppingItems from '../../data/Toppings'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
type ToppingsProps = {
    pizza: { base: string, toppings: string[] },
    addTopping: (topping: string) => void
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
const Toppings = ({ pizza, addTopping }: ToppingsProps) => {
    return (
        <motion.div className={styles.toppings}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">

            <div className={styles.title}>
                Step 1: Choose Your Toppings
            </div>
            <div className={styles.menus}>
                {
                    ToppingItems.map((value, id) => {
                        return (
                            <motion.div
                                key={id}
                                className={styles.toppingItem}
                                onClick={() => addTopping(value)}
                                whileHover={{ scale: 1.3, originX: 0 }}
                                transition={{ type: 'spring', stiffness: 320 }}>

                                {pizza.toppings.includes(value) ? ">" : ""} {value}

                            </motion.div>
                        )
                    })
                }
            </div>
            <Link to="/order" className={styles.outLink}>
                <motion.div className={styles.link}
                    variants={buttonVariants}
                    whileHover="hover">
                    Order
                </motion.div>
            </Link>
        </motion.div>
    );
}

export default Toppings;