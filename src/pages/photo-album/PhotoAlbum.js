import React from 'react'
import { useLocation } from 'react-router-dom'
import PhotoPreview from '../../components/photo-preview/PhotoPreview'
import PhotoAlbumImg from '../../images/photo-album.png'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PhotoAlbum = () => {
    const query = useQuery();
    const page = query.get('page') || 1;
    return (
        <div>
            <PhotoPreview imgUrl={PhotoAlbumImg} title="Photo Album" showWriting={true} pgForPhotoAlbum={true} page={page}/>
        </div>
    )
}

export default PhotoAlbum
