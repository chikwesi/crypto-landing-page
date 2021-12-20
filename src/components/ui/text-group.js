import style from './text-group.module.css'
import { motion } from 'framer-motion';

const container = {
    show: {
        transition: {
            when: "afterChildren",
            staggerChildren: .25,
        },
    },
}
const item = {
    hidden: {
        opacity: 0, y: -50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeIn",
            duration: 0.3,
        },
    },
};

const TextGroup = ({ title, shortTitle, subTitle, detail, className }) => {

    return (
        <motion.div
            className={className}
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}>
            <motion.h5 variants={item}>
                {shortTitle &&
                    <span
                        className="me-4">
                        {shortTitle}
                    </span>
                }
                <span className={style.line}></span>
            </motion.h5>
            <motion.h2
                variants={item}
                className={style.title}>{title}</motion.h2>
            <motion.p variants={item}>{subTitle}</motion.p>
            <motion.p variants={item}
                className="text-muted mt-5">{detail}</motion.p>
        </motion.div>
    )
}

export default TextGroup;