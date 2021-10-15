import React from 'react'
import Preview from '../../components/preview/Preview'
import JobSearchImg from '../../images/job-search.png'

const Recruitment = () => {
    return (
        <div>
            <Preview imgUrl={JobSearchImg} title="Recruitment/Job Search" showJobSearch={true} />
        </div>
    )
}

export default Recruitment
