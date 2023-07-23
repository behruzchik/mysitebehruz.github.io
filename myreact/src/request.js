import axios from 'axios';

function refresh(url, method, data){
    axios({
        url: "http://localhost:8080/api/auth/refresh?refreshToken="+localStorage.getItem("REFRESH_TOKEN"),
        method: "POST",
        headers: {
            "REFRESH_TOKEN": localStorage.getItem("REFRESH_TOKEN")
        }}).then(res=>{
        localStorage.setItem("AUTH_TOKEN", res.data)
        return res.data
        // axios({
        //     url: "http://localhost:8080/api"+url,
        //     method,
        //     data,
        //     headers: {
        //         "accessToken": res.data
        //     }
        // })
    })
}

export default function request({url, method, data}) {
    return axios({
        url: "http://localhost:8080/api"+url,
        method,
        data,
        headers: {
            "Authorization": localStorage.getItem("AUTH_TOKEN")
        }
    })
    //     .catch(err=>{
    //     axios({
    //         url: "http://localhost:8080/api/auth/refresh?REFRESH_TOKEN="+localStorage.getItem("REFRESH_TOKEN"),
    //         method: "POST"
    //     }).then(res=>{
    //         localStorage.setItem("AUTH_TOKEN", res.data)
    //     })
    // }).then(()=>{
    //     request({url, method, data})
    // })
}



// export function check(text){
//     console.log(text)
//     if (text==="refresh"){
//         return refresh();
//     }
//     return null
// }