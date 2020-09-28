let menuBlock = document.querySelector(".minWidth-menu");

let menuUl = document.querySelector(".to-be-changed");

menuBlock.addEventListener("click", (event) => {
    event.stopPropagation()

    menuUl.style.display = "block"
})
let body = document.querySelector("body")

addEventListener("click", (event) => {
    event.stopPropagation()

    menuUl.style.display = "none"
})