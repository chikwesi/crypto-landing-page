
import { Container } from 'react-bootstrap';
import style from './banner.module.css';

const Banner = ({ children, borderRadious, className }) => {
    return (
        <Container>
            <div
                className={`${className || ''} ${style.banner}`}
                style={{ borderRadius: borderRadious }}>
                {children}
            </div>

        </Container>
    )
}

export default Banner;