let input = document.querySelector("input");
let btn = document.querySelector(".btn-warning");
let list = document.querySelector("ul")
let errorMsg = document.querySelector("#warningMsg");




btn.addEventListener("click",function(e){
    e.preventDefault();
})




input.addEventListener("keyup",function(e){
    if(e.target.value.length<4)
    {
        errorMsg.style.display = "block"
        btn.setAttribute("disabled","")
    }
    else
    {
        errorMsg.style.display = "none"
        btn.removeAttribute("disabled")
    }

})
