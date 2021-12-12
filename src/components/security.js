
import { Container, Row, Col, Button } from 'react-bootstrap';
import Frame from './layout/frame';
import style from './security.module.css';
import TextGroup from './ui/text-group';

const textData = {
    shortTile: 'Safety Priority',
    title: <span>Our commitment<br /> to Your Security</span>,
    detail: "Turney has extensive experience with Defi and blockchain technologies. This includes the security processes required to keep fund safe. We are serious about risk and have worked extensively to protect your investment"
}

const Security = () => {
    return (
        <Frame>
            <Container className={style.hero} >
                <Row>
                    <Col>
                        <p>Our Feature</p>
                    </Col>
                    <Col>
                        <TextGroup
                            {...textData}
                        />
                        <Button size="lg">Learn More</Button>
                    </Col>
                </Row>
            </Container>
        </Frame>

    )
}

export default Security;