
import { Container, Row, Col, Button } from 'react-bootstrap';
import Frame from './layout/frame';
import style from './testimonial.module.css';
import IconButton from './ui/icon-button';
import PaddedOutline from './ui/padded-outline';
import QuoteCard from './ui/quote-card';
import TextGroup from './ui/text-group';

const textData = {
    shortTitle: 'Testimony',
    title: <>Inspired by <br />
        Investors. Built<br />
        for the Future.</>,
    detail: <>Rated <span className="fw-bolder text-white">4.3 / 5</span > based on <span className={`fw-bolder text-white ${style.underline}`}>96 <span className="fw-normal">reviews</span>
        </span>.<br /> Showing our favourite reviews</>
}

const Testimonial = () => {
    return (
        <Frame className={style.bg}>
            <Container>
                <Row className='align-items-center'>
                    <Col md={5}>
                        <TextGroup
                            {...textData}
                        />
                        <Button>Learn More</Button>
                    </Col>
                    <Col>
                        <Row className="align-items-end gx-4">
                            <Col md={6}>
                                <PaddedOutline>
                                    <QuoteCard></QuoteCard>
                                </PaddedOutline>
                            </Col>
                            <Col md={3}>
                                <PaddedOutline>
                                    <img
                                        className={style.image}
                                        src='/testimonial-image-1.jpeg'
                                        alt="man smiling" />
                                </PaddedOutline>
                            </Col>
                            <Col md={3}>
                                <PaddedOutline>
                                    <img
                                        className={style.image}
                                        src='/testimonial-image-1.jpeg'
                                        alt="man smiling" />
                                </PaddedOutline>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row className="py-4 justify-content-center">
                    <Col md="auto">
                        <IconButton variant className='me-3' icon="<" />
                        <IconButton icon=">" />
                    </Col>
                </Row>
            </Container>
        </Frame>

    )
}

export default Testimonial;