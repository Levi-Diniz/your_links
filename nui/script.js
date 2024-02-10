function toogleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    const image = document.querySelector("#profile img")
    if(html.classList.contains("light")){
        image.setAttribute('src', "/nui/image/avatar-light.png")
    } else {
        image.setAttribute('src', "/nui/image/avatar.png")
    }

    // if(html.classList.contains("light")){
    //     html.classList.remove("light")
    // } else {
    //     html.classList.add("light")
    // }

}