function newElement(){
    let li=document.createElement("li");
    let inputValue=document.querySelector(".input-box").value;
    let text=document.createTextNode(inputValue);
    li.appendChild(text);
    if(inputValue===''){
        alert("The task cannot be empty!");
    }
    else{
        document.querySelector("ul").appendChild(li);
    }
    document.querySelector(".input-box").value="";
}
window.onload=function(){
    let list=document.querySelector("ul");
    list.addEventListener("click",function(e){
        if(e.target.tagName==='LI'){
            e.target.classList.toggle("checked");
        }
    })
}
