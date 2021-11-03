import React from "react";
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Preview from "../../components/preview/Preview";
import useStyles from "./styles";
import NoticeImg from "../../images/notice.png";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Notice = () => {
    const { noticeTotal } = useSelector(state => state.posts)
    const query = useQuery();
    const page = query.get('page') || 1;
    return (
        <div>
            <Preview total={noticeTotal} imgUrl={NoticeImg} title="Notice" showWriting={true} showNotice={true} pgForNotice={true} page={page}/>
        </div>
    );
};

export default Notice;
