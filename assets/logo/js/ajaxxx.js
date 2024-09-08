const xhr = new XMLHttpRequest()

xhr.open ("GET, "https://api.npoint.io/08892a856c24a749d976", true)

xhr.onerror= () => {
        console.log("error")
}

xhr.onload = () => {
        console.log(xhr.response)
}

xhr.send()