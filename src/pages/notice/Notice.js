import React from 'react'
import Preview from '../../components/preview/Preview'
import useStyles from './styles'
import NoticeImg from '../../images/notice.png'

const Notice = () => {
    return (
        <div>
            <Preview imgUrl={NoticeImg} title="Notice" showNotice={true} />
        </div>
    )
}

export default Notice
