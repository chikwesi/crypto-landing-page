
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Header from './header';
import style from './hero.module.css';
import Trades from './trades';
import { motion } from 'framer-motion';



const wrapper = {
    hidden: {
        height: '1300px'
    },
    show: {
        height: '800px',
        transition: {
            ease: "easeIn",
            duration: 0.5,
            when: "beforeChildren",
        },
    },
}

const container = {
    show: {
        transition: {
            when: "afterChildren",
            staggerChildren: .65,
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
            duration: 0.7,
        },
    },
};
const tradeVariant = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.7,
            delay: 2
        },
    },
};

const Hero = () => {
    return (
        <motion.div variants={wrapper}
            className={`${style.hero} container-fluid`}

            initial='hidden'
            animate='show'>
            <Header></Header>
            <motion.div
                className="text-center d-flex align-items-center flex-column justify-content-center h-100"
                variants={container}
            >
                <motion.h1 variants={item} className={style.title}>
                    Don't Just Hold, <span className="fw-bolder">Earn.</span>
                </motion.h1>
                <motion.p variants={item} className="mt-2 fs-4 text-muted">
                    Buy or deposit crypto with one click and start earning, not just saying
                </motion.p>
                <motion.a variants={item}>
                    <Button
                        size="lg"
                        className="mt-3">
                        Get Started
                    </Button>
                </motion.a>
            </motion.div>
            <motion.div variants={tradeVariant}
                initial='hidden'
                animate='show'>
                <Trades ></Trades>
            </motion.div>
        </motion.div>
    )
}

export default Hero;