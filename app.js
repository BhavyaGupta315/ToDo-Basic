let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
btn.addEventListener("click", (ev)=>{
    let temp = document.createElement("li");
    let del = document.createElement("button");
    del.classList.add("delete");
    del.innerText = "delete";
    temp.innerText = inp.value;
    inp.value = "";
    temp.appendChild(del);
    ul.appendChild(temp);
})

// let delBtns = document.querySelectorAll(".delete");
// for(i of delBtns){
//     i.addEventListener("click", function(){
//         let rem = this.parentElement;
//         rem.remove();
//     })
// }

ul.addEventListener("click", (ev)=>{
    if(ev.target.nodeName == "BUTTON"){
        let listRem = ev.target.parentElement;
        listRem.remove();
    }
})