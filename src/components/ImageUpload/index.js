import React from 'react'
import  DropFileInput  from './DropFileInput';


const ImageUplaod = () => {

    const onFileChange = (files) => {
        console.log(files);
    }


    return (
      
    <div className="box">
            <h2 className="header">
                React drop files input
            </h2>
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
        </div>

  )
}

export default ImageUplaod;