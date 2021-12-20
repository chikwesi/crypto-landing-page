import { Container, Row, Col, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'


const container = {
    hidden: {
        opacity: 0, y: 80
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.3,
            when: "beforeChildren",
            staggerChildren: .35,
        },
    },
}
const logoVariant = {
    hidden: {
        rotate: 0
    },
    show: {
        rotate: 360
    },
};

const linkVariant = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.4,
        },
    },
};

const buttonVariant = {
    hidden: {
        opacity: 0,
        x: -50,
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

const Footer = () => {
    return (
        <motion.div variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{once: true}}
            className='bg-black text-white'>
            <Container>
                <Row className="py-5">
                    <Col md='auto'>
                        <motion.img variants={logoVariant} src="./logo.png" width="30px" alt="logo" />
                    </Col>
                    <Col>
                        <motion.div className="row" variants={linkVariant}>
                            <Col md='auto'>
                                Careers
                            </Col>
                            <Col md='auto'>
                                Blog
                            </Col>
                            <Col md='auto'>
                                Support
                            </Col>
                            <Col md='auto'>
                                Privary Policy
                            </Col>
                            <Col md='auto'>
                                Term of Use
                            </Col>
                        </motion.div>
                    </Col>
                    <Col md='auto' className="ms-auto">
                        <motion.div variants={buttonVariant}>
                            <Button>
                                Signup
                            </Button>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default Footer