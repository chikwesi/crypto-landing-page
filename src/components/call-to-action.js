
import Button from 'react-bootstrap/Button';
import style from './hero.module.css';
import Banner from './layout/banner';
import Frame from './layout/frame';
import TextGroup from './ui/text-group';

const TITLE = <>Sign up today and receive <br />your $40 earning bonus </>

const CallToAction = () => {
    return (
        <Frame>
            <Banner borderRadious='10px'  className="text-center">
                <TextGroup
                    className="text-center"
                    title={TITLE}
                />
                <Button size='lg'>Get Started</Button>
            </Banner>
        </Frame>
    )
}

export default CallToAction;