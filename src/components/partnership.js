import { Container } from "react-bootstrap";
import Frame from "./layout/frame";
import style from "./partnership.module.css"
import { motion } from 'framer-motion';

const container = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeIn",
            when: "beforeChildren",
            staggerChildren: .35,
        },
    },
}
const item = {
    hidden: {
        opacity: 0, x: -50,
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

const partners = ["silvergate.png", "coincover.png", "fireblocks.png", "huobi.png", "coinbase.png"]

const Partners = () => {
    return (
            <Container>
                <motion.div className={style.container} variants={container} initial="hidden" whileInView="show">
                    <h4 className={`fw-bold `}>
                        <span className={style.underline}> We</span> Partner With The Best</h4>
                    <div className={style.partners}>
                        {partners.map((partner) => <motion.img variants={item} className={style.partner} src={partner} alt={partner} />)}
                    </div>
                </motion.div>
            </Container>
  
    )
}

export default Partners;