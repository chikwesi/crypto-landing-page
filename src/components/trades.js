
import { Col, Row } from 'react-bootstrap';
import TradingCard from './ui/trading-card';
import style from './trades.module.css';


const trades = [
    {
        title: 'Bitcoin',
        totalAmount: '$90,479.12',
        percentage: -4.90,
        abbrv: 'BTC',
        imageSrc: './bitcoin.png'
    },
    {
        title: 'Etherium',
        totalAmount: '$5,897.12',
        percentage: 1.69,
        abbrv: 'ETH',
        imageSrc: './ethereum.png'
    },
    {
        title: 'Solana',
        totalAmount: '$90,479.12',
        percentage: -4.90,
        abbrv: 'SOL',
        imageSrc: './solana.png'
    },
    {
        title: 'Cardano',
        totalAmount: '$5,897.12',
        percentage: 1.69,
        abbrv: 'ADA',
        imageSrc: './coin.png'
    }
]

const Trades = () => {
    return (
        <Row className="justify-content-center">
        <Col md={8}>
            <Row className={`gx-0 ${style.trades}`}>
                {
                    trades.map(trade =>
                        <Col md={3}>
                            <div className={style.tradeCard}> 
                                <TradingCard {...trade} />
                            </div>
                        </Col>
                    )
                }
            </Row>
        </Col>
    </Row>

    )
}

export default Trades;