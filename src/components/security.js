import { Container, Row, Col } from 'react-bootstrap';
import Frame from './layout/frame';
import style from './security.module.css';
import IconButton from './ui/icon-button';
import InvestmentCard from './ui/investment-card';
import TextGroup from './ui/text-group';

const textData = {
    shortTitle: 'Safety Priority',
    title: <span>Our commitment<br /> to Your Security</span>,
    detail: <>Turney has extensive experience with Defi and blockchain <br /> technologies. This includes the security processes required to <br />keep fund safe. We are serious about risk and have worked <br />extensively to protect your investment</>
}

const Security = () => {
    return (
        <Frame>
            <Container className={style.hero} >
                <Row className="justify-content-between">
                    <Col md={5}>
                        <InvestmentCard></InvestmentCard>
                    </Col>
                    <Col md={6} className="d-flex flex-column align-items-start">
                        <TextGroup
                            {...textData}
                        />
                        <IconButton className="mt-auto">Learn More</IconButton>
                    </Col>
                </Row>
            </Container>
        </Frame>

    )
}

export default Security;