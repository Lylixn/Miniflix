let codeDiv = document.getElementById("code")
let modal = document.getElementById("code-modal")

let inputs = codeDiv.querySelectorAll('input')

inputs[0].focus()

let i = 0;

let value = [0, 0, 0, 0]

let checker = arr => arr.every(v => v === 1);

inputs.forEach((element) => {

    let index = i;

    element.addEventListener('input', (event) => {

        if (event.target.value.length > 1) {
            event.target.value = event.target.value[0]
        }

        if (event.target.value.length === 1) {
            if (inputs[index + 1]) {
                inputs[index + 1].focus()
            }
            value[index] = 1
            if (checker(value)) {
                modal.style.display = "none"
                let video = document.getElementById("video")
                video.controls = true
            }
        } else {
            value[index] = 0
        }

    })

    element.addEventListener("keydown", (event) => {
        if (event.key === 'Backspace' && event.target.value === ""){
            if (inputs[index - 1]) {
                inputs[index - 1].focus()
            }
        }
    });

    i++;

})