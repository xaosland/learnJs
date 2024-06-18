// console.log("request data")


// setTimeout(()=>{
//     console.log("prepare data")
//     const backendData = {
//         serverData: "server data",
//         portData: "port data",
//         stateData: "state data"
//     }
//     setTimeout(()=>{
//         backendData.serverData = "new server data"
//         console.log("send data")
//         console.log(backendData)
//     }, 2000)
// }, 2000)
//
//

const p = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("prepare data")
        const backendData = {
            serverData: "server data",
            portData: "port data",
            stateData: "state data"
        }
        console.log(backendData)
        resolve(backendData)
    }, 2000)
})

p.then((backendData)=>{
 return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            backendData.serverData = "Измененный server data"
            resolve(backendData)
        }, 2000)
    })
    .then((clientData)=>{
        console.log("client data", clientData)
        clientData.portData = "Измененный port data"
        return clientData
    })
     .then((data)=>{
         console.log(data)
     })
})

.catch((err)=>{
    console.log("Error", err)
})

.finally(()=>{
    console.log("finally")
})

const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve()
        }, ms)
    })
}

sleep(5000).then(()=>{
    console.log("sleep 5000")
})

Promise.all([sleep(1000), sleep(2000), sleep(3000)])
.then(()=>{
    console.log("all")
})