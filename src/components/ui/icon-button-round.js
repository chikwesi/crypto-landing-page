import style from './icon-button-round.module.css'
import { motion } from 'framer-motion';

const IconButtonRound = ({ children, className, outline, variants }) => {

    return (
        <motion.button
            variants={variants}
            className={`${outline ? style.outline : style.primary} ${className}`}>
            {children}
        </motion.button>
    )
}

export default IconButtonRound;