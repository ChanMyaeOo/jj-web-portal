import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LivLocImg from '../../images/liv-loc.png'
import Preview from '../../components/preview/Preview'
import useStyles from './styles'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const LivingLocation = () => {
    const classes = useStyles()
    const query = useQuery();
    const page = query.get('page') || 1;
    const { livTotal } = useSelector(state => state.posts)

    return (
        <div>
            <Preview total={livTotal} imgUrl={LivLocImg} title="Living/Location" showLivingLocation={true} pgForLiving={true} page={page} showWriting={true}/>
        </div>
    )
}

export default LivingLocation
