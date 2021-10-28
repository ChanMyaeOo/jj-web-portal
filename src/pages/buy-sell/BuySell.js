import React from 'react'
import { useLocation } from 'react-router-dom'
import Preview from '../../components/preview/Preview'
import BuySellImg from '../../images/buy-sell.png'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BuySell = () => {
     const query = useQuery();
    const page = query.get('page') || 1;
    return (
        <div>
            <Preview imgUrl={BuySellImg} title="Home Appliances" showBuyAndSell={true} pgForHomeAppliances={true} page={page} />
        </div>
    )
}

export default BuySell
