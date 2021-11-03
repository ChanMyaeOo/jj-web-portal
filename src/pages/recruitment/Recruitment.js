import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Preview from '../../components/preview/Preview'
import JobSearchImg from '../../images/job-search.png'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Recruitment = () => {
    const query = useQuery();
    const page = query.get('page') || 1;
    const { jobSearchTotal } = useSelector(state => state.posts)
    return (
        <div>
            <Preview total={jobSearchTotal} imgUrl={JobSearchImg} title="Recruitment/Job Search" showJobSearch={true} pgForRecruitment={true} page={page} showWriting={true} />
        </div>
    )
}

export default Recruitment
