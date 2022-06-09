


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

let addCart=document.querySelectorAll(".addC");
  let addToCart=document.querySelectorAll(".addToCart");
  let productCount=document.querySelector(".counter");



  if(localStorage.getItem("basket")==null){
    localStorage.setItem("basket",JSON.stringify([]));
  }

  let arr=JSON.parse(localStorage.getItem("basket"));

  CountProduct();

  addCart.forEach(b=>{
    b.addEventListener("click",function(ev){
      if(localStorage.getItem("basket")==null){
        localStorage.setItem("basket",JSON.stringify([]));
      }
      let arr=JSON.parse(localStorage.getItem("basket"));

        ev.preventDefault();
        let productId=this.parentElement.getAttribute("id");
        let existProduct=arr.find(p=>p.id==productId);

        if(existProduct==undefined){
            arr.push({
                id:productId,
                price:this.previousElementSibling.lastElementChild.lastElementChild.innerText,
                imageUrl:this.parentElement.firstElementChild.firstElementChild.getAttribute("src"),
                name:this.previousElementSibling.firstElementChild.innerText,
                count:1
            })
        }
        else{
          existProduct.count++;
        }
        localStorage.setItem("basket",JSON.stringify(arr));
        CountProduct();
    })

  });


  addToCart.forEach(b=>{
    b.addEventListener("click",function(ev){

      if(localStorage.getItem("basket")==null){
        localStorage.setItem("basket",JSON.stringify([]));
      }
      let arr=JSON.parse(localStorage.getItem("basket"));

        ev.preventDefault();
        let productId=this.parentElement.parentElement.parentElement.getAttribute("id");
        let existProduct=arr.find(p=>p.id==productId);

        if(existProduct==undefined){
            arr.push({
                id:productId,
                price:this.parentElement.previousElementSibling.lastElementChild.innerText,
                imageUrl:this.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.getAttribute("src"),
                name:this.parentElement.parentElement.firstElementChild.innerText,
                count:1
            })
        }
        else{
          existProduct.count++;
        }
        localStorage.setItem("basket",JSON.stringify(arr));
        CountProduct();
    })

  });

  function CountProduct(){
    let arr=JSON.parse(localStorage.getItem("basket"));
    let test=0;
    for (const item of arr) {
      test+=item.count;
    }
    productCount.innerText=test;
  }