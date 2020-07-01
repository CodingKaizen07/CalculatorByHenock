let equalBtn= document.querySelector(".equal");
let acBtn = document.querySelector(".ac");
let delBtn = document.querySelector(".del");
let prevOperBtn = document.querySelector(".previous-operand");
let currOperBtn = document.querySelector(".current-operand");

let btn = document.querySelectorAll(".btn")

console.log(currOperBtn.textContent)
for (var i=0; i<btn.length; i++){
    
    btn[i].addEventListener("click", function(){
        //e.preventDefault()
        
        currOperBtn.textContent += this.textContent;
    })
}

equalBtn.addEventListener("click",function(e){
    //e.preventDefault;
    if (currOperBtn.textContent === ""){ currOperBtn.textContent = `Errorrr`}

    else{  currOperBtn.textContent = eval(currOperBtn.textContent);
        prevOperBtn.textContent += currOperBtn.textContent + " ";
        currOperBtn.textContent = "";}
    
})
console.log(eval(3 + 8))

acBtn.addEventListener("click", function(e){
    //e.preventDefault();
    currOperBtn.textContent = ""
    prevOperBtn.textContent = ""
})


delBtn.addEventListener("click", function(e){
    //e.preventDefault()
    let arr = currOperBtn.textContent.split("");
    console.log(arr)
    arr.splice(arr.length-1, 1);
    currOperBtn.textContent = arr.join("")
})
