import React from 'react'
import GalleryItem from './GalleryItem'

function Gallery(props) {
    const data = props.data.result.read()

    const display = data.map((item, i)=> {
        return (
            <GalleryItem item={item} key={i}/>
        )
    })

    return (
    <div>
        {display}
    </div>
  )
}

export default Gallery