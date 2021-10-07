import React from 'react'
import LivLocImg from '../../images/liv-loc.png'
import Preview from '../../components/Preview/Preview'
import useStyles from './styles'

const LivingLocation = () => {
    const classes = useStyles()
    return (
        <div>
            <Preview imgUrl={LivLocImg} title="Living/Location" />
        </div>
    )
}

export default LivingLocation
