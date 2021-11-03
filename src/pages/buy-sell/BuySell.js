import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Preview from '../../components/preview/Preview'
import BuySellImg from '../../images/buy-sell.png'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BuySell = () => {
     const query = useQuery();
    const page = query.get('page') || 1;
    const { buySellTotal } = useSelector(state => state.posts)
    return (
        <div>
            <Preview total={buySellTotal} imgUrl={BuySellImg} title="Home Appliances" showBuyAndSell={true} pgForHomeAppliances={true} page={page} showWriting={true}/>
        </div>
    )
}

export default BuySell
