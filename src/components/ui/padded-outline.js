import style from "./padded-outline.module.css"
import { motion } from 'framer-motion';

const PaddedOutline = ({ variants, children, className = "" }) => {

    return (
        <motion.div variants={variants} className={`${className} ${style.outline}`}>
            {children}
        </motion.div>
    )
}

export default PaddedOutline;