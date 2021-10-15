import React from 'react'
import Preview from '../../components/preview/Preview'
import BuySellImg from '../../images/buy-sell.png'

const BuySell = () => {
    return (
        <div>
            <Preview imgUrl={BuySellImg} title="Home Appliances" showBuyAndSell={true} />
        </div>
    )
}

export default BuySell
