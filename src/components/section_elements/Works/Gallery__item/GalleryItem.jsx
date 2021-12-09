import React from 'react';
import "./GalleryItem.scss"
import Bird from "../../../../assets/img/bird.png"

const Galleryitem = () => {
    return (
        <div className="gal__item" style={{backgroundImage: `url(${Bird})`}}>
            <a href="#">
                View It!
            </a>
        </div>
    );
}

export default Galleryitem;
