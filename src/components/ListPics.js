import React from 'react';
import './ListPics.css';
import ImageCard from './ImageCard'

const ListPics=(props)=>{
   const pics =  props.pics.map((pic)=>{
        return <ImageCard key={pic.id} image={pic}/>
    });
    return <div className="image-list">{pics}</div>

}
export default ListPics