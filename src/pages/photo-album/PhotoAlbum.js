import React from 'react'
import PhotoPreview from '../../components/photo-preview/PhotoPreview'
import PhotoAlbumImg from '../../images/photo-album.png'

const PhotoAlbum = () => {
    return (
        <div>
            <PhotoPreview imgUrl={PhotoAlbumImg} title="Photo Album"/>
        </div>
    )
}

export default PhotoAlbum
