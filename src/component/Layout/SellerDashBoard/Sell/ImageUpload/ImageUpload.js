import React,{Component} from 'react'
import Axios from '../../../../../container/Server/axios'
import {storage} from '../../../../../container/Server/Firebase'

class ImageUpload extends Component{
state={
    selectedFile:null,
}

onChangeHandler=(e)=>{
this.setState({
    selectedFile:e.target.files[0]
})

}

fileUploadHandler=(e)=>{
const uploadTask=storage.ref(`images/${this.state.selectedFile.name}`).put(this.state.selectedFile);
uploadTask.on(
    "state_changed",
    snapshot =>{},
    error=>{
        console.log(error)
    },
    ()=>{
        storage
        .ref('images')
        .child(this.state.selectedFilename)
        .getDownloadURL()
        .then(url =>{
            console.log(url)
        })
    }
)

}

    render(){
return(

    <>
    <input type="file" onChange={this.onChangeHandler} />
    <button onClick={this.fileUploadHandler}>Upload</button>

        </>
)

}

}

export default ImageUpload;