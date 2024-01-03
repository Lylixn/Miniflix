const header_element = document.getElementById("header")

document.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header_element.setAttribute("class","header-scroll")
    } else {
        header_element.setAttribute("class","")
    }
});