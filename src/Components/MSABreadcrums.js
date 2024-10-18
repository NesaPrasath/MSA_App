// import { useState } from "react"
import MSABreadcrumsElement from "./MSABreadcrumsElement"

 export default function MSABreadcrums(props){
   return <div className="brdcrm-div">
   {props.data?.map((d,index)=><MSABreadcrumsElement key={index} index={index} location={d?.location} setBData={props.setBData} fid={d?.id} active={d?.id===props.activeFolder} setItems={props.setItems}/>)}
   </div>
 }