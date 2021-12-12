import { Row, Col } from 'react-bootstrap';
import style from "./trading-card.module.css";
import { motion } from 'framer-motion'

const TradingCard = ({ title, abbrv, totalAmount, percentage, imageSrc, className = '' }) => {

    return (
        <motion.div
            whileHover={{
                scale: 1.1,
                transition: {
                    ease: "easeInOut",
                    duration: 0.4,
                }
            }}
        >
            <Row className="align-items-center">
                <Col>
                    <span>{title} </span>
                    <span className="text-muted">{abbrv} </span>
                </Col>
                <Col md='auto' className="ms-auto">
                    <div className={style.icon} >
                        <img src={imageSrc} width="100%" alt="icon" />
                    </div>
                </Col>
            </Row>
            <Row className="mt-5 align-items-center">
                <Col md={6}>
                    <h5 className="mb-0 fs-5 fw-bold">{totalAmount}</h5>
                    <p className={`mt-0 ${percentage > 0 ? 'text-success' : 'text-danger'}`}>{percentage}%</p>
                </Col>
                <Col className="ms-auto" md="auto">
                    <img src="./line-chart.png" height="50px" alt="graph" />
                </Col>

            </Row>
        </motion.div >
    )
}

export default TradingCard;