
import { Col, Row } from 'react-bootstrap';
import style from './get-started.module.css';
import Banner from './layout/banner';
import Frame from './layout/frame';
import NumberedCard from './ui/numbered-card';
import TextGroup from './ui/text-group';
import { motion } from 'framer-motion';
import IconButton from './ui/icon-button';

const TEXT_DATA = {
    title: <>Start Earning*<br />in 5 Simple steps </>,
    subTitle: "*Not Just Saving"
}

const STEPS = [
    {
        title: "Register",
        detail: "Web App, IOS and Andriod."
    },
    {
        title: "Verify Yourself",
        detail: "To start using Turney."
    },
    {
        title: "First Transactions",
        detail: "Buy or transfer digital assets."
    },
    {
        title: "High Yield Deposits",
        detail: "*Not just saving."
    },
    {
        title: "Earn Yours",
        detail: "Receive $40 free bonus"
    }
]

const hideAndShowVariant = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.3,
            when: "beforeChildren",
        },
    },
};

const textVariant = {
    hidden: {
        opacity: 0,
        y: -30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeIn",
            duration: 0.5,
        },
    },
};

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


const GetStarted = () => {
    return (
        <Frame>
            <motion.div
                variants={hideAndShowVariant}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}>
                <Banner borderRadious='20px'>
                    <Row className="gx-2">
                        <Col md={5} className="d-flex flex-column align-items-start pb-4">
                            <motion.div variants={textVariant}
                                initial='hidden'
                                whileInView='show'>
                                <TextGroup
                                    {...TEXT_DATA}
                                    className="text-left"
                                />
                            </motion.div >
                            <motion.a variants={textVariant} className="mt-auto">
                                <IconButton >Get Started</IconButton>
                            </motion.a>

                        </Col>
                        <Col md={7}>
                            <motion.div
                                variants={container}
                                initial='hidden'
                                whileInView='show'
                                viewport={{ once: true }}
                                className={`row flex-wrap flex-column justify-content-center gy-4 p-4 ${style.height}`}>
                                {
                                    STEPS.map((step, i) =>
                                        <motion.div
                                            className="col-md-6"
                                            variants={item}>
                                            <NumberedCard
                                                key={i}
                                                {...step}
                                                number={++i}
                                            />
                                        </motion.div>

                                    )
                                }
                            </motion.div>
                        </Col>
                    </Row>
                </Banner>
            </motion.div>
        </Frame>
    )
}

export default GetStarted;