import { useEffect, useState } from "react";

export default function MSAFolder(props){

    const [folder,setFolder]=useState({});
    function dblclick(e){
        console.log(e);
        setFolder(prev=>({...folder,shwname:false}))
    }

    function entrKey(e){
        console.log(e);
        if(e.key==="Enter")
        {
            console.log(e.target.value);
            setFolder(prev=>({...folder,name:e.target.value,shwname:true}))
        }
        // else if((e.key).match(/[a-zA-Z0-9]/))
        // {
        //     setFolder(prev=>({...folder,name:e.target.value,shwname:false}))
        // }
    }

    useEffect(()=>{
        setFolder(d=>({...d,name:props.name,shwname:true,id:props.value}))
    },[props.name, props.value])

    return <div className="folder" onDoubleClick={dblclick} >
    {/* <i className="fa-solid fa-folder"></i> */}
    <div onClick={()=>{props.onFolderClick(folder)}}><svg viewBox="0 0 24 20" fill="green">
        <path d="M10 4H2C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V7C23 6.44772 22.5523 6 22 6H12L10 4Z"
        fill="#FFC107"/>
        <path d="M12 6L10 4H2C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V7C23 6.44772 22.5523 6 22 6H12Z"
        fill="#FFB300"/>
        <path d="M22 6H12L10 4H2C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V7C23 6.44772 22.5523 6 22 6Z"
        fill="#FFCA28"/>
    </svg></div>
    {!folder?.shwname&&<input type="text" onKeyPress={entrKey} defaultValue={folder?.name}></input>}
    {folder?.shwname&&<label>{folder?.name}</label>}
    </div>
}