import { motion, useCycle } from "framer-motion";
import styles from './loader.module.css'

const loaderVariants = {
    oneAnimation: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                repeatType: 'reverse' as const,
                repeat: Infinity,
                duration: 0.5
            },
            y: {
                repeatType: 'reverse' as const,
                repeat: Infinity,
                duration: 0.25,
                ease: "easeOut"
            },
        }
    },
    twoAnimation: {
        x: 0,
        y: [0, -40],
        transition: {
            y: {
                repeatType: 'reverse' as const,
                repeat: Infinity,
                duration: 0.25,
                ease: "easeOut"
            },
        }
    }
}
const Loader = () => {
    const [animation, cycleAnimation] = useCycle("oneAnimation", "twoAnimation");
    return (
        <>
            <motion.div className={styles.loader}
                variants={loaderVariants}
                animate={animation}>

            </motion.div>
            <div onClick={()=>cycleAnimation()}> Cycle Loader</div>
        </>
    );
}

export default Loader;