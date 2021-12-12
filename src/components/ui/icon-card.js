import style from "./icon-card.module.css"
import { motion } from 'framer-motion';

const container = {
    show: {
        transition: {
            when: "afterChildren",
            staggerChildren: 0.35,
        },
    },
}
const item = {
    hidden: {
        opacity: 0, y: -50,
        transition: {
            ease: "easeIn",
            duration: 0.7,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeIn",
            duration: 0.7,
        },
    },
};

const IconCard = ({ title, detail, imageSrc }) => {

    return (
        <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            viewport={{ once: true }}
        >
            <motion.img variants={item} src={imageSrc} className={style.img} alt="icon" />
            <motion.h4 variants={item} className="mt-5 fw-bold">{title}</motion.h4>
            <motion.p variants={item} className="mt-4 text-muted">{detail}</motion.p>
        </motion.div>
    )
}

export default IconCard;