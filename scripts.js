const container = document.getElementById("outputContainer")
let quantity = document.getElementById("quantity")

function random(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createGroup(color) {
    let group = document.createElement('div')
    let block = document.createElement('div')
    let desc = document.createElement('label')
    group.className = "colorGroup"
    block.className = "colorBlock"
    desc.className = "colorDesc"
    block.style.backgroundColor = color
    desc.innerHTML = color
    group.appendChild(block)
    group.appendChild(desc)
    container.appendChild(group)

}

function pick(type) { 

    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    if (type == "random") {
        let r = random(1, 255)
        let g = random(1, 255)
        let b = random(1, 255)
        let basergb = "rgb(" + r + ", " + g + ", " + b + ")" 

        for (let i = 1; i < (parseInt(quantity.value) + 1); i++) {
            createGroup(basergb)
            r = random(1, 255)
            g = random(1, 255)
            b = random(1, 255)
            basergb = "rgb(" + r + ", " + g + ", " + b + ")" 
        }
    } else {
        let r = random(1, 255)
        let g = random(1, 255)
        let b = random(1, 255)
        let basergb = "rgb(" + r + ", " + g + ", " + b + ")" 

        for (let i = 1; i < (parseInt(quantity.value) + 1); i++) {
            createGroup(basergb)
            r += random(25, 55)
            g += random(25, 55)
            b += random(25, 55)
            if (r > 255) {
                r = 255
            }
            if (g > 255) {
                g = 255
            } 
            if (b > 255) {
                b = 255
            } 
            basergb = "rgb(" + r + ", " + g + ", " + b + ")" 
        }
    }
}