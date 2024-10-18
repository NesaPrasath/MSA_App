import { useCallback, useEffect, useState } from "react";
import MSABreadcrums from "./MSABreadcrums";
import MSAFolder from "./MSAFolder";
import MSASearchBar from "./MSASearchBar";
import MSATools from "./MSATools";
import { GetRequest } from "../Common/DBConnection";
import MSASubmitForm from "./MSASubmitForm";
import MSAModelPopUp from "./MSAModelPopUp";

export default function Lobby(props){
    const [items,setItems]=useState({activeFolder:null,Folders:[],Files:[]});
    const [subForm,setSubForm]=useState({show:false,showMdlpup:false,Mdlpupheader:'',Mdlpupmessage:'',Mdlpupbtn:''});
    const [bdata,setBData]=useState([{location:'',id:null}]);

    
    const handleShowsubForm=(data)=>{
        setSubForm(prev=>({...prev,type:data,show:!prev.show}))
    }

    const handleMdlPopup=useCallback((data)=>{
        setSubForm(prev=>({...prev,showMdlpup:!prev.showMdlpup,Mdlpupheader:data?.header,Mdlpupmessage:data?.message,Mdlpupbtn:data?.btn}))
    },[])

    const handleFolder=useCallback((folder)=>{
        if(items.activeFolder!==folder?.id){
            setItems(d=>({...d,activeFolder:folder?.id}))
            setBData(bd=>[...bd,{location:folder?.name,id:folder?.id}])
        }
    },[items.activeFolder])

    useEffect(()=>{
        async function fetchData(){
            if(!items.activeFolder){
                await GetRequest('folder/home',(data)=>{
                    setItems(prev=>({...prev,Folders:data}))
                })
            }
            else{
                await GetRequest("folder/all/"+items.activeFolder,(data)=>{
                    setItems(prev=>({...prev,Folders:data}))
                })
            }
        }
        fetchData();
    },[items.activeFolder])
    return <div className="lobby">
        <section className="toolbar-area flex-between">
            <MSABreadcrums data={bdata} setBData={setBData} activeFolder={items?.activeFolder} setItems={setItems}/>
            <div className="tools-div flex-between">
                <MSATools HeaderType={'tools'} handleForm={handleShowsubForm} activeFolder={items?.activeFolder}/>
                <MSASearchBar/>
            </div>
        </section>
        <section className="folder-area">
            {items?.Folders?.length>0?items?.Folders?.map((data,index)=>(<MSAFolder key={index} value={data.fid} name={data.fName} onFolderClick={handleFolder}/>)):<div className="empty-box">
                <section>
                    <span className='lg-pic'><img alt='not-found-pic' src="/image/no-data-found.avif"/></span>
                    <h1>No Files and Folders are Available to display</h1>
                </section>
                </div>}
        </section>
        {subForm?.show&&<MSASubmitForm handleVisibility={handleShowsubForm} type={subForm?.type} activeFolder={items.activeFolder} handlePopup={handleMdlPopup} setItems={setItems}/>}
        <MSAModelPopUp header={subForm?.Mdlpupheader} message={subForm?.Mdlpupmessage} btn={subForm?.Mdlpupbtn} show={subForm?.showMdlpup} />
    </div>
}