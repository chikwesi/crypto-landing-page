
import { Container, Row, Col } from 'react-bootstrap';
import style from './feature.module.css';
import Frame from './layout/frame';
import IconCard from './ui/icon-card';

const features = [
    {
        imageSrc: './external-link.png',
        title: 'Smart Order Routing',
        detail: 'We provide the best price and execution based on an aggregated order book from multiple exchanges'
    },
    {
        imageSrc: './mouse-clicker.png',
        title: 'One-Click Investing',
        detail: 'You can invest fiat or cryptoo to a High Yield account with one click'
    },
    {
        imageSrc: './settings.png',
        title: 'Market Neutral',
        detail: 'Our yields are based on protocol activity, we hedge exposure to the underlying asset and market volatility'
    },
]


const Feature = () => {
    return (
        <Frame>
            <Container className={style.hero} >
                <Row>
                    <Col md={4}>
                        <p className="fs-5 fw-bolder">Our Feature</p>
                    </Col>
                    <Col md={8}>
                        <h2 className={`fs-1 fw-600 ${style.borderDouble}`}>
                            Get Ready for Seamless<br />
                            Online Investment, with<br />
                            Crypto Digital Currencies.
                        </h2>
                    </Col>
                </Row>
                <Row className='mt-5 gx-5'>
                    {
                        features.map((feature, i) => (
                            <Col key={i}>
                                <IconCard {...feature} ></IconCard>
                            </Col>)
                        )
                    }

                </Row>
            </Container>
        </Frame>
    )
}

export default Feature;