


function review(topic,crTop) {
  var i;
  var x = document.getElementsByClassName("tab");
  var y=document.getElementsByClassName("topic")
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.color="#c2c2d3";
  }
  let current=document.getElementById(topic);
  let currentTopic=document.getElementById(crTop)
  current.style.display="flex";  
  currentTopic.style.color="black";

}


let minus =document.getElementById("minus")
let plus=document.getElementById("plus")
let count=document.getElementById("count")


minus.addEventListener("click",function(){
    if(count.innerText>1)
    {
        count.innerText-=1;
    }
})

plus.addEventListener("click",function(){
    count.innerText=1+parseInt(count.innerText);
})