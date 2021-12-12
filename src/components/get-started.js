
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import style from './get-started.module.css';
import Banner from './layout/banner';
import Frame from './layout/frame';
import NumberedCard from './ui/numbered-card';
import TextGroup from './ui/text-group';

const TEXT_DATA = {
    title: "Start Earning* in 5 Simple steps",
    detail: "*Not just saving"
}

const STEPS = [
    {
        title: "Register",
        detail: "Web App, IOS and Andriod."
    },
    {
        title: "Verify Yourself",
        detail: "To start using Turney."
    },
    {
        title: "First Transactions",
        detail: "Buy or transfer digital assets."
    },
    {
        title: "High Yield Deposits",
        detail: "*Not just saving."
    },
    {
        title: "Earn Yours",
        detail: "Receive $40 free bonus"
    }
]
const GetStarted = () => {
    return (
        <Frame>
            <Banner borderRadious='20px'>
                <Row className="gx-2">
                    <Col md={5}>
                        <TextGroup
                            {...TEXT_DATA}
                            className="text-left"
                        />
                        <Button size="lg">Get Started</Button>
                    </Col>
                    <Col>
                        <Row
                            className={`d-flex flex-wrap flex-column justify-content-center gy-4 p-4 ${style.height}`}>
                            {
                                STEPS.map((step, i) =>
                                    <Col md={6}>
                                        <NumberedCard
                                            key={i}
                                            {...step}
                                            number={++i}
                                        />
                                    </Col>

                                )
                            }
                        </Row>
                    </Col>
                </Row>
            </Banner>
        </Frame>
    )
}

export default GetStarted;