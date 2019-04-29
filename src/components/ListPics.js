import React from 'react';

const ListPics=(props)=>{
   const pics =  props.pics.map(({description,urls,id})=>{
        return <img key={id} src={urls.small} alt={description}/>
    });
    return <div>{pics}</div>

}
export default ListPics