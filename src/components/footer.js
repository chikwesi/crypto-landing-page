import { Container, Row, Col, Button } from 'react-bootstrap'

const Footer = () => {

    return (
        <div className='bg-black text-white'>
            <Container>
                <Row className="py-5">
                    <Col md='auto'>
                        Turnev icon
                    </Col>
                    <Col>
                        <Row>
                            <Col md='auto'>
                                Careers
                            </Col>
                            <Col md='auto'>
                                Blog
                            </Col>
                            <Col md='auto'>
                                Support
                            </Col>
                            <Col md='auto'>
                                Privary Policy
                            </Col>
                            <Col md='auto'>
                                Term of Use
                            </Col>
                        </Row>
                    </Col>
                    <Col md='auto' className="ms-auto">
                        <Button>
                            Signup
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer