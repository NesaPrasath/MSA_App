export async function GetRequest(URL,Response){
    const serviceurl=process.env.REACt_APP_SERVICE_URL+URL
    fetch(serviceurl,{
        method:'GET',
        headers:{
            'Authorization':'Bearer '+sessionStorage.getItem('token')
        }
    }).then(res=>res.json()).then(data=>Response(data)).catch(err=>console.log(err))
}

export async function PostRequest(URL,data,Response){
    const serviceurl=process.env.REACt_APP_SERVICE_URL+URL
    fetch(serviceurl,{
        method:"POST",  
        headers: sessionStorage.getItem('token')?{
            'Authorization':'Bearer '+sessionStorage.getItem('token'),
            'Content-Type': 'application/json',
          }:{
            'Content-Type': 'application/json',
          },
        body:JSON.stringify(data)
    }).then(res=>{
        return res}).then(data=>Response(data)).catch(err=>{console.log(err)})
}