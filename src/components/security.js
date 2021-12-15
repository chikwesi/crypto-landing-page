
import { Container, Row, Col, Button } from 'react-bootstrap';
import Frame from './layout/frame';
import style from './security.module.css';
import InvestmentCard from './ui/investment-card';
import TextGroup from './ui/text-group';

const textData = {
    shortTitle: 'Safety Priority',
    title: <span>Our commitment<br /> to Your Security</span>,
    detail: "Turney has extensive experience with Defi and blockchain technologies. This includes the security processes required to keep fund safe. We are serious about risk and have worked extensively to protect your investment"
}

const Security = () => {
    return (
        <Frame>
            <Container className={style.hero} >
                <Row className="justify-content-between">
                    <Col md={5}>
                        <InvestmentCard></InvestmentCard>
                    </Col>
                    <Col md={6}>
                        <TextGroup
                            {...textData}
                        />
                        <Button size="lg" className='mt-5'>Learn More</Button>
                    </Col>
                </Row>
            </Container>
        </Frame>

    )
}

export default Security;