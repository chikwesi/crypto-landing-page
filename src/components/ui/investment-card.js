import style from "./investment-card.module.css"
import { motion } from 'framer-motion';

const container = {
    show: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.45,
        },
    }
}
const item = {
    hidden: {
        opacity: 0, y: -30,
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

const Levels = ({num}) => (
    <div className="bg-white mt-3 p-3 rounded position-relative">
        <img className="me-2" src='./safe.png' width="20px" alt='padlock' /> level {num} Updated
        <img className={style.rocket} src='./rocket.png' width="30px" alt='padlock' />
    </div>
)

const InvestmentCard = ({ title, detail, imageSrc }) => {

    return (
        <motion.div
            variants={container}
            initial='hidden'
            whileInView='show'
            className='position-relative'
            viewport={{ once: true }}
        >
            <motion.img variants={item} src='./man-with-laptop.jpg' className={style.img} alt="icon" />
            <div className={style.transparentCard}>
                <div className=''>
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
                </div>
                <Levels num="1"/>
                <Levels num="2"/>
            </div>
        </motion.div>
    )
}

export default InvestmentCard;