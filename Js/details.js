let photos=document.querySelectorAll(".photo")
let mainPhoto=document.querySelector(".mainPhoto")



for (const photo of photos) {
  imageUrl= mainPhoto.firstElementChild.getAttribute("src");
  photo.addEventListener("click",function(){
   imageUrl = photo.firstElementChild.getAttribute("src");
  })
}

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


 let addCart=document.querySelectorAll(".addC");
  let addToCart=document.querySelectorAll(".addToCart");
  let productCount=document.querySelector(".counter");
  let notif=document.querySelector(".notification")
  let plus=document.getElementById("plus")
  let minus=document.getElementById("minus")
  let count=document.getElementById("count")
  let counter=0;

  plus.addEventListener("click",function(){
    counter++;
    count.innerText=counter;
  })
  minus.addEventListener("click",function(){
    if(counter>1){
      counter--;
      count.innerText=counter;
    }
  })


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
            notif.firstElementChild.innerText=`"`+this.previousElementSibling.firstElementChild.innerText+`"`+"has been added tou your cart";
            notif.firstElementChild.nextElementSibling.innerText="";
            

        }
        else{
          existProduct.count++;
          notif.firstElementChild.innerText="Card Updated";
          notif.firstElementChild.nextElementSibling.innerText=`${existProduct.count} x ${this.previousElementSibling.firstElementChild.innerText} has been added tou your cart`;
        }
        localStorage.setItem("basket",JSON.stringify(arr));
        CountProduct();

        notif.style.opacity=1;
        setTimeout(
          function() {
            notif.style.opacity=0;
          }, 3000);

          
        
       
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
                count:1,
            })
            notif.firstElementChild.innerText=`"`+this.parentElement.parentElement.firstElementChild.innerText+`"`+"has been added tou your cart";
            notif.firstElementChild.nextElementSibling.innerText="";
        }
        else{
          existProduct.count++;
          notif.firstElementChild.innerText="Card Updated";
          notif.firstElementChild.nextElementSibling.innerText=`${existProduct.count} x ${this.parentElement.parentElement.firstElementChild.innerText} has been added tou your cart`;
        }
        localStorage.setItem("basket",JSON.stringify(arr));
        CountProduct();

        notif.style.opacity=1;
        setTimeout(
          function() {
            notif.style.opacity=0;
          }, 3000);

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
