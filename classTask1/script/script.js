let input = document.querySelector("input")
let button = document.querySelector("button")
let body = document.querySelector("body")
let h = document.querySelector("#h1")
button.addEventListener("click", function() {
    
    body.style.background = input.value
    h.innerHTML = `Back Ground Color:${input.value} `
    input.textContent=""
    input.getAttribute("placeholder")
})

  
  