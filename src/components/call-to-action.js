import Banner from './layout/banner';
import Frame from './layout/frame';
import IconButton from './ui/icon-button';
import TextGroup from './ui/text-group';

const TITLE = <>Sign up today and receive <br />your $40 earning bonus </>

const CallToAction = () => {
    return (
        <Frame>
            <Banner borderRadious='10px' className="text-center">
                <TextGroup
                    className="text-center"
                    title={TITLE}
                />
                <IconButton>Get Started</IconButton>
            </Banner>
        </Frame>
    )
}

export default CallToAction;