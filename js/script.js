// $(document).ready(function() {
//     $('real__container')
// })
$(document).ready(function() {
    $('.real__container').slick();
});


// addEventListener("load", () => {
//     let projectsIcon = document.querySelectorAll(".priject__icon-link2")
//     let projectsItemImg = document.querySelectorAll(".projects-img")

//     for (let i = 0; i < projectsIcon.length; i++) {
//         projectsIcon[i].addEventListener("click", function projectClick() {
//             // console.dir(projectsItem[i])
//             projectsItemImg[i].classList.add("project__show")

//         })
//     }
// })
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