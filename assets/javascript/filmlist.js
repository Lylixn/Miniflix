let filmListArray = document.querySelectorAll(".film-list");

filmListArray.forEach((filmList) => {
    let filmListAction = filmList.querySelectorAll(".film-list-action");
    let filmListList = filmList.querySelector(".film-list-list");

    filmListAction.forEach((action) => {
        if (action.classList.contains("film-list-action-left")) {
            action.addEventListener("click", () => {
                console.log("clicked");
                filmListList.scrollLeft -= filmListList.offsetWidth;
            });
        } else {
            action.addEventListener("click", () => {
                console.log("clicked");
                filmListList.scrollLeft += filmListList.offsetWidth;
            });
        }
    });
});