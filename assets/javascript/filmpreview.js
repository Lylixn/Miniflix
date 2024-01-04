class Preview {
    filmpreview = document.getElementById("filmpreview")

    constructor() {
    }

    setPreview(element, src) {
        setTimeout(() => {
            if (!element.matches(":hover")) {
                return;
            }
            this.filmpreview.style.display = "block";
            this.filmpreview.style.top = element.offsetTop + "px";
            this.filmpreview.style.left = element.offsetLeft + "px";

            setTimeout(() => {
                this.filmpreview.classList.add("filmpreview-active")
                this.filmpreview.classList.add("filmpreview-content-active")
                this.filmpreview.querySelector("img").src = src;

                this.filmpreview.addEventListener("mouseleave", () => {
                    this.filmpreview.classList.remove("filmpreview-active")
                    this.filmpreview.classList.remove("filmpreview-content-active")
                    this.filmpreview.querySelector("img").src = "";
                    this.filmpreview.style.display = "none";
                })

                window.addEventListener("resize", () => {
                    this.filmpreview.style.top = element.offsetTop + "px";
                    this.filmpreview.style.left = element.offsetLeft + "px";
                })
            }, 100);
        }, 800);
    }

    unsetPreview(element) {

    }

}