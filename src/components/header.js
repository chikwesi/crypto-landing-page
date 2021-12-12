import { Container, Row, Col, Button } from 'react-bootstrap'

const Header = () => {

    return (
        <Container>
            <Row className="py-4 align-items-center border-bottom border-dark">
                <Col md='auto'>
                    Turney icon
                </Col>
                <Col>
                    <Row>
                        <Col md='auto'>
                            Earn
                        </Col>
                        <Col md='auto'>
                            Trade
                        </Col>
                        <Col md='auto'>
                            Support
                        </Col>
                        <Col md='auto'>
                            Learn
                        </Col>
                        <Col md='auto'>
                            Blog
                        </Col>
                    </Row>
                </Col>
                <Col md='auto' className="ms-auto">
                    <Button variant='link' size="lg">
                        Login
                    </Button>
                    <Button variant='outline-secondary' size='lg'>
                        Join Now
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Header