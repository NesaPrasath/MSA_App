import React, { useCallback, useState } from 'react';
import MSAPopHdrTools from './MSAPopHdrTools';
import MSALabelInput from './MSALabelInput';
import { PostRequest } from '../Common/DBConnection';

export default function MSASubmitForm(props) {
  const [formtype,setFormType]=useState(props.type);

  const CreateAction=async(data)=>{
    let URL=formtype==='file'?'file/':'folder/';
    const resp=await PostRequest(URL,data,(data)=>{
      props.handleVisibility();
      props.handlePopup({header:'',message:`${formtype==='file'?'File':'Folder'} created successfully!`,btn:'OK'})
      data.json().then(data=>{
        props.setItems(d=>({...d,Folders:[...d.Folders,data]}))
      })
    });
    }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e.target[1].files);
    // return false;
    const data=formtype==='file'?{'flName':e.target[0].value,'flData':e.target[1].files}:{'fName':e.target[0].value,'fParentId':props.activeFolder?props.activeFolder:null}
    CreateAction(data);
  }


  return (
    <div className='popup-fxd'>
      <div className='popup'>
        <div className='popup-hdr'>
        <MSAPopHdrTools handleVisibility={props.handleVisibility}/>
        </div>
        {formtype&&<div className='popup-cnt'><form onSubmit={handleSubmit} encType="multipart/form-data">
            <MSALabelInput Type="text" Label={formtype==='file'?"File Name":"Folder Name"} required={true}/>
            {formtype==='file'&&<MSALabelInput Type="file"/>}
            <div className='label-input-div'><button type='submit' className='frm-submit'>Submit</button></div></form>
        </div>}
      </div>
    </div>
  );
}
