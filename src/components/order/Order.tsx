import { useEffect } from "react";
import styles from './order.module.css'
import { motion } from 'framer-motion'
type OrderProps = {
    pizza: { base: string, toppings: string[] },
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
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
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    },
    exit: {
        x: "-100vw",
        transition: {
            ease: "easeInOut"
        }
    }
}
const childrenVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
    }
}

const Order = ({ pizza, setShowModal }: OrderProps) => {

    useEffect(() => {
        setTimeout(() => {
            setShowModal(true)
        }, 4000)
    }, [setShowModal])
    return (
        <motion.div

            className={styles.order}
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            <div className={styles.title}>
                Thank you for your order :)
            </div>
            <motion.div className={styles.desc} variants={childrenVariants}>
                you order a {pizza.base} pizza with:
            </motion.div>
            <div className={styles.menus} >
                {pizza.toppings.map((value, id) => {
                    return (
                        <motion.div key={id} variants={childrenVariants}>
                            {value}
                        </motion.div>
                    )
                })}
                {pizza.toppings.length === 0 ?
                    <motion.div variants={childrenVariants}>
                        "nothing"
                    </motion.div>
                    : ""
                }

            </div>


        </motion.div>
    );
}

export default Order;