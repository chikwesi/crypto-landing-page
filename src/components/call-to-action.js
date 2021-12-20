import Banner from './layout/banner';
import Frame from './layout/frame';
import Partners from './partnership';
import IconButton from './ui/icon-button';
import TextGroup from './ui/text-group';
import { motion } from 'framer-motion';

const TITLE = <>Sign up today and receive <br />your $40 earning bonus </>
const buttonVariant = {
    hidden: {
        opacity: 0,
        y: -80,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeIn",
            duration: 0.4,
            delay: 1
        },
    },
};

const CallToAction = () => {
    return (
        <Frame>
            <Partners/>
            <Banner borderRadious='10px' className="text-center mt-8">
                <TextGroup
                    className="text-center"
                    title={TITLE}
                />
                    <motion.div variants={buttonVariant}
                            initial='hidden'
                            whileInView='show'
                            viewport={{once: true}}
                            className="mt-auto">
                          <IconButton>Get Started</IconButton>
                        </motion.div>
              
            </Banner>
        </Frame>
    )
}

export default CallToAction;