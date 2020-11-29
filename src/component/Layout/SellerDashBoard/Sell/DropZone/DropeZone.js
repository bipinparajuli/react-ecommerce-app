// components/simple-dropzone.component.js
import React from "react";

import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

const SimpleDropZone = () => {

    // Payload data and url to upload files
    const getUploadParams = ({ meta }) => { return { url: 'https://cors-anywhere.herokuapp.com/gs://e-commerce-app-b19e5.appspot.com' } }
console.log(getUploadParams)
    // Return the current status of files being uploaded
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    // Return array of uploaded files after submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            accept="image/*,audio/*,video/*"
        />
    );
};

export default SimpleDropZone;