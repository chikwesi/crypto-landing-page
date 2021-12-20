import style from "./investment-card.module.css"
import { motion } from 'framer-motion';

const containerVariant = {
    show: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    }
}
const imageVariant = {
    hidden: {
        opacity: 0, x: -100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeIn",
            duration: 0.3,
        },
    },
};
const cardVariant = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.3,
            when: "beforeChildren",
            staggerChildren: .35,
        },
    },
}
const itemVariants = {
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

const Levels = ({ num, variants }) => (
    <motion.div variants={variants} className="bg-white mt-3 p-3 rounded position-relative">
        <img className="me-2" src='./safe.png' width="20px" alt='padlock' /> level {num} Updated
        <img className={style.rocket} src='./rocket.png' width="30px" alt='padlock' />
    </motion.div>
)

const InvestmentCard = ({ title, detail, imageSrc }) => {
    return (
        <motion.div
            variants={containerVariant}
            initial='hidden'
            whileInView='show'
            className='position-relative d-flex align-items-center'
            viewport={{ once: true }}
        >
            <motion.img variants={imageVariant} src='./man-with-laptop.jpg' className={style.img} alt="icon" />
            <motion.div  variants={cardVariant} className={style.transparentCard}>
                <motion.div variants={itemVariants}>
                    <div className='bg-black text-muted p-3 rounded-top d-flex'>
                        <div className="col-auto">
                            <img className="me-3" src='./padlock.png' width="20px" alt='padlock' />
                        </div>

                        <span>Your Investment Secured</span>
                    </div>
                    <div className="p-3 bg-white rounded-bottom">
                        <p className='fw-bold m-0 text-muted'>Encrypted Address</p>
                        <p className="text-muted m-0">Oxa4589436sdfsdf</p>
                    </div>
                </motion.div>
                <Levels  variants={itemVariants} num="1" />
                <Levels  variants={itemVariants} num="2" />
            </motion.div>
        </motion.div>
    )
}

export default InvestmentCard;