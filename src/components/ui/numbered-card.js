import style from "./numbered-card.module.css"
import { motion } from 'framer-motion';


const NumberedCard = ({ title, detail, number }) => {

    return (
        <motion.div
            whileHover={{
                scale: 1.1,
                transition: {
                    ease: "easeInOut",
                    duration: 0.4,
                }
            }}
            className={style.card}
        >
            <div className={style.badge}>{number}</div>
            <h5>{title}</h5>
            <p className="text-muted">{detail}</p>
        </motion.div >
    )
}

export default NumberedCard;