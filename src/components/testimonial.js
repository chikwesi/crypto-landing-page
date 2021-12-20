
import { Container, Row, Col } from 'react-bootstrap';
import Frame from './layout/frame';
import style from './testimonial.module.css';
import IconButtonRound from './ui/icon-button-round';
import PaddedOutline from './ui/padded-outline';
import QuoteCard from './ui/quote-card';
import TextGroup from './ui/text-group';
import { motion } from 'framer-motion';
import Caret from './ui/caret';

const textData = {
    shortTitle: 'Testimony',
    title: <>Inspired by <br />
        Investors. Built<br />
        for the Future.</>,
    detail: <>Rated <span className="fw-bolder text-white">4.3 / 5</span > based on <span className={`fw-bolder text-white ${style.underline}`}>96 <span className="fw-normal">reviews</span>
    </span>.<br /> Showing our favourite reviews</>
}


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
        opacity: 0, y: -80
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeIn",
            duration: 0.4,
        },
    },
};

const card = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.4,
        },
    },
};

const reflection = {
    hidden: {
        opacity: 0, x: 80
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeIn",
            duration: 0.4,
        },
    },
};

const Testimonial = () => {
    return (
        <Frame className={style.bg}>
            <Container>
                <Row className='align-items-center'>
                    <Col md={5}>
                        <TextGroup
                            {...textData}
                        />
                        <img src="./trustpilot.png" width="80px" alt="trustpilot" />
                    </Col>
                    <motion.div className="col-md-7"
                        variants={container}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}>
                        <Row className="align-items-end gx-4">
                            <Col md={6} className="position-relative d-flex align-items-center">
                                <PaddedOutline variants={card} className={style.card}>
                                    <QuoteCard></QuoteCard>
                                </PaddedOutline>
                                <motion.div variants={reflection} className={style.shade1}></motion.div>
                                <motion.div variants={reflection} className={style.shade2}></motion.div>

                            </Col>
                            <Col md={3}>
                                <PaddedOutline variants={item}>
                                    <img
                                        className={style.image}
                                        src='/testimonial-image-2.jpeg'
                                        alt="man smiling" />
                                </PaddedOutline>
                            </Col>
                            <Col md={3}>
                                <PaddedOutline variants={item}>
                                    <img
                                        className={style.image}
                                        src='/testimonial-image-3.jpeg'
                                        alt="man smiling" />
                                </PaddedOutline>
                            </Col>
                        </Row>

                    </motion.div>
                </Row>
                <Row className="py-4 justify-content-center">
                    <Col md="auto">
                        <IconButtonRound outline className='me-3'>
                            <Caret angle="left" />
                        </IconButtonRound>
                        <IconButtonRound className='me-3'>
                            <Caret angle="right" />
                        </IconButtonRound>
                    </Col>
                </Row>
            </Container>
        </Frame>

    )
}

export default Testimonial;