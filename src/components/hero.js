
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Header from './header';
import style from './hero.module.css';
import Trades from './trades';
import { motion } from 'framer-motion';

const container = {
    show: {
        transition: {
            when: "afterChildren",
            staggerChildren: .35,
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
const Hero = () => {
    return (
        <Container fluid className={style.hero}>
            <Header></Header>
            <motion.div
                className="text-center d-flex align-items-center flex-column justify-content-center h-100"
                variants={container}
                initial='hidden'
                animate='show'
                exit='exit'>
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
            <Trades></Trades>
        </Container>
    )
}

export default Hero;