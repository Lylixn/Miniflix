let filmListArray = document.querySelectorAll(".film-list");

function animationScroll(element, number) {
    let scrollLeft = element.scrollLeft;
    let offsetWidth = element.offsetWidth;
    let scroll = scrollLeft + offsetWidth * number;

    element.scrollTo({
        top: 0,
        left: scroll,
        behavior: "smooth"
    });
}

filmListArray.forEach((filmList) => {
    let filmListAction = filmList.querySelectorAll(".film-list-action");
    let filmListList = filmList.querySelector(".film-list-list");

    filmListAction.forEach((action) => {
        if (action.classList.contains("film-list-action-left")) {
            action.addEventListener("click", () => {
                animationScroll(filmListList, -1)
            });
        } else {
            action.addEventListener("click", () => {
                animationScroll(filmListList, 1)
            });
        }
    });
});