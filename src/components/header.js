import { Container, Row, Col, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'


const container = {

    show: {
        transition: {
            when: "beforeChildren",
            staggerChildren: .35,
        },
    },
}
const logoVariant = {
    hidden: {
        rotate: 300
    },
    show: {
        rotate: 360,
        transition: {
            ease: "easeIn",
            duration: 0.2,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.7,
        },
    },
};

const textVariant = {
    hidden: {
        opacity: 0,
        x: -40,
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


const Header = () => {

    return (
        <motion.div variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}>
            <Container>
                <Row className="py-4 align-items-center border-bottom border-dark">
                    <Col md='auto' className='fw-bolder d-flex align-items-center'>
                        <motion.img variants={logoVariant} src="./logo.png" width="30px" alt="logo" />
                        <motion.a variants={textVariant}>
                        TURNEY
                        </motion.a>
                    </Col>
                    <Col>
                        <motion.div className="row" variants={item}>
                            <Col md='auto'>
                                Earn
                            </Col>
                            <Col md='auto'>
                                Trade
                            </Col>
                            <Col md='auto'>
                                Support
                            </Col>
                            <Col md='auto'>
                                Learn
                            </Col>
                            <Col md='auto'>
                                Blog
                            </Col>
                        </motion.div>
                    </Col>
                    <Col md='auto' className="ms-auto">
                        <motion.div variants={item}>
                            <Button variant='link' className="text-white text-decoration-none d-inline-flex align-items-center" size="lg">
                                <img className="me-2" src="./keyhole.png" width="20px" alt="keyhole" />
                                Login
                            </Button>
                            <Button variant='outline-secondary' size='lg'>
                                Join Now
                            </Button>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default Header