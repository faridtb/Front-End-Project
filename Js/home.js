var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "02/09/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        }, 0)
    }());


  let prev=document.querySelector(".preview")
  let next=document.querySelector(".next")

  prev.addEventListener("click",function(){
    
  })







  let addCart=document.querySelectorAll(".addCart");
  let addToCart=document.querySelectorAll(".addToCart");
  let productCount=document.querySelector(".counter");
  let notif=document.querySelector(".notification");
  let minus=document.querySelectorAll(".minus");
  let plus=document.querySelectorAll(".plus");






  if(localStorage.getItem("basket")==null){
    localStorage.setItem("basket",JSON.stringify([]));
  }

  let arr=JSON.parse(localStorage.getItem("basket"));


  function ButtonStyle(){

    for (const buttons of addCart) {
      let productId=buttons.parentElement.parentElement.getAttribute("id");
      let existProduct=arr.find(p=>p.id==productId);

      if(existProduct==undefined){
        buttons.style.display="flex";
        buttons.nextElementSibling.style.display="none";
      }
      else{
        buttons.style.display="none";
        buttons.nextElementSibling.style.display="flex";
        buttons.nextElementSibling.firstElementChild.innerText=existProduct.count;
      }
    }

  }

  CountProduct();
  ButtonStyle();
  PlusMinus();
  function PlusMinus(){

  plus.forEach(p=>{
    p.addEventListener("click",function(e){
      e.preventDefault();
      let arr=JSON.parse(localStorage.getItem("basket"));
      let productId=this.parentElement.parentElement.parentElement.getAttribute("id");
      let existProduct=arr.find(p=>p.id==productId);
      existProduct.count++;
      notif.style.opacity=1;
        setTimeout(
          function() {
            notif.style.opacity=0;
          }, 4000);
        this.previousElementSibling.previousElementSibling.innerText=existProduct.count;
        notif.firstElementChild.innerText="Card Updated";
        notif.firstElementChild.nextElementSibling.innerText=`${existProduct.count} x ${this.parentElement.parentElement.previousElementSibling.firstElementChild.innerText} has been added tou your cart`;
        localStorage.setItem("basket",JSON.stringify(arr));
        CountProduct();
    })
  })

  minus.forEach(m=>{
    m.addEventListener("click",function(e){

      e.preventDefault();
      let arr=JSON.parse(localStorage.getItem("basket"));
      let productId=this.parentElement.parentElement.parentElement.getAttribute("id");
      let existProduct=arr.find(p=>p.id==productId);

      if(existProduct.count>1){
        existProduct.count--;
        localStorage.setItem("basket",JSON.stringify(arr));
        CountProduct();
      }

      else{
        let index = arr.indexOf(existProduct);
        arr.splice(index,1)
        localStorage.setItem("basket",JSON.stringify(arr));
        this.parentElement.parentElement.firstElementChild.style.display="flex";
        this.parentElement.parentElement.lastElementChild.style.display="none";
        CountProduct();
      }
        notif.style.opacity=1;
        setTimeout(
          function() {
            notif.style.opacity=0;
          }, 4000);
        this.previousElementSibling.innerText=existProduct.count;
        notif.firstElementChild.innerText="Card Updated";
        notif.firstElementChild.nextElementSibling.innerText=`${existProduct.count} x ${this.parentElement.parentElement.previousElementSibling.firstElementChild.innerText} has been changed tou your cart`;
      })
  })
}
  
  addCart.forEach(b=>{
    b.addEventListener("click",function(ev){
      if(localStorage.getItem("basket")==null){
        localStorage.setItem("basket",JSON.stringify([]));
      }
      let arr=JSON.parse(localStorage.getItem("basket"));

        ev.preventDefault();
        let productId=this.parentElement.parentElement.getAttribute("id");
        let existProduct=arr.find(p=>p.id==productId);

        if(existProduct==undefined){
            arr.push({
                id:productId,
                price:this.parentElement.previousElementSibling.lastElementChild.lastElementChild.innerText,
                imageUrl:this.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute("src"),
                name:this.parentElement.previousElementSibling.firstElementChild.innerText,
                count:1
            })
            notif.firstElementChild.innerText=`"`+this.parentElement.previousElementSibling.firstElementChild.innerText+`"`+"has been added tou your cart";
            notif.firstElementChild.nextElementSibling.innerText="";
            this.parentElement.firstElementChild.style.display="none";
            this.parentElement.lastElementChild.style.display="flex";
          }
          else{
            PlusMinus();
          }
        
        localStorage.setItem("basket",JSON.stringify(arr));
        CountProduct();

        notif.style.opacity=1;
        setTimeout(
          function() {
            notif.style.opacity=0;
          }, 4000);
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


