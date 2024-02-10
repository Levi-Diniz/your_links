function toogleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    const image = document.querySelector("#profile img")
    if(html.classList.contains("light")){
        image.setAttribute('src', "assets/image/levi_sem_fundo_com_borda_preta.png")
    } else {
        image.setAttribute('src', "assets/image/Levi_sem_fundo.png")
    }

    // if(html.classList.contains("light")){
    //     html.classList.remove("light")
    // } else {
    //     html.classList.add("light")
    // }

}