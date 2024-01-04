let searchbar = document.getElementById("searchbar");

let img = searchbar.querySelector("img");
let input =  searchbar.querySelector("input")

img.addEventListener("click", () => {
    searchbar.classList.add("active-searchbar");
    input.focus();
})

document.addEventListener("click", (e) => {
    if (e.target !== searchbar && e.target !== img && e.target !== input) {
        searchbar.classList.remove("active-searchbar");
        input.value = "";
    }
})