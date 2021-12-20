
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import style from './feature.module.css';
import Frame from './layout/frame';
import IconCard from './ui/icon-card';

const features = [
    {
        imageSrc: './external-link.png',
        title: 'Smart Order Routing',
        detail: 'We provide the best price and execution based on an aggregated order book from multiple exchanges'
    },
    {
        imageSrc: './mouse-clicker.png',
        title: 'One-Click Investing',
        detail: 'You can invest fiat or cryptoo to a High Yield account with one click'
    },
    {
        imageSrc: './settings.png',
        title: 'Market Neutral',
        detail: 'Our yields are based on protocol activity, we hedge exposure to the underlying asset and market volatility'
    },
]
const containerVariant = {
    show: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 1.35,
        },
    },
}
const cardVariant = {
    hidden: {
        display: 'none',
    },
    show: {
        display: 'block',
        transition: {
            when: "beforeChildren",
            duration: 2,
        },
    }
};
const subHeadingVariant = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.5,
        },
    },
};
const headingVariant = {
    hidden: {
        opacity: 0,
        x: -20
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeIn",
            duration: 0.3,
            delay: 0.5
        },
    },
};

const Feature = () => {
    return (
        <Frame>
            <Container className={style.hero} >
                <Row>
                    <Col md={4}>
                        <motion.p variants={subHeadingVariant}
                            initial='hidden'
                            whileInView='show'
                            className="fs-5 fw-bolder">Our Feature</motion.p>
                    </Col>
                    <Col md={8}>
                        <motion.h2
                            variants={headingVariant}
                            initial='hidden'
                            whileInView='show'
                             className={`fs-1 fw-600 ${style.borderDouble}`}>
                            Get Ready for Seamless<br />
                            Online Investment, with<br />
                            Crypto Digital Currencies.
                        </motion.h2>
                    </Col>
                </Row>
                <motion.div className='mt-5 row gx-5'
                    variants={containerVariant}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                    exit='exit'
                >
                    {
                        features.map((feature, i) => (
                            <motion.div className='col-4' variants={cardVariant} key={i}>
                                <IconCard {...feature} ></IconCard>
                            </motion.div>)
                        )
                    }

                </motion.div>
            </Container>
        </Frame>
    )
}

export default Feature;