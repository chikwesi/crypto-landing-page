import { Container } from "react-bootstrap";
import Frame from "./layout/frame";
import style from "./partnership.module.css"

const partners = ["silvergate.png", "coincover.png", "fireblocks.png", "huobi.png", "coinbase.png"]

const Partners = () => {
    return (
        <Frame>
            <Container>
                <div className={style.container}>
                    <h4 className={`fw-bold `}><span className={style.underline}> We</span> Partner With The Best</h4>
                    <div className={style.partners}>
                        {partners.map((partner) => <img className={style.partner} src={partner} alt={partner} />)}
                    </div>
                </div>
            </Container>
        </Frame>
    )
}

export default Partners;