let emptyScreen=document.getElementById("empty")
let fullScreen=document.getElementById("full")
let table=document.getElementById("mainTable")
let mini=document.getElementById("mini")
let miniTotalPrice=document.querySelector(".totalPrice")
let endPrice=document.getElementById("totalPrice")

let totalPrice=0;
let totally=0;


if(localStorage.getItem("basket")==null){
    localStorage.setItem("basket",JSON.stringify([]));
  }

  let arr=JSON.parse(localStorage.getItem("basket"));

  if(arr.length!=0){
    fullScreen.style.display="flex";
    mini.style.display="flex";
    emptyScreen.style.display="none";
  }
  else{
    emptyScreen.style.display="flex";
    fullScreen.style.display="none";
    mini.style.display="none";
  }



  arr.forEach(product => {
      let tr =document.createElement("tr");
      let tdImage=document.createElement("td");
      let image=document.createElement("img");
      image.style.width="70px";
      image.style.height="70px";
      image.setAttribute("src",product.imageUrl);
      tdImage.append(image);

      let tdName=document.createElement("td");
      tdName.innerText=product.name;
      tdName.style.paddingTop="30px";

      let tdPrice=document.createElement("td");
      tdPrice.innerText=product.price;
      tdPrice.style.paddingTop="30px";

      let tdCount=document.createElement("td");
      tdCount.innerText=product.count;
      tdCount.style.padding="30px";


      let tdTotal=document.createElement("td");
      let money=product.price.split("$");
      totalPrice=product.count*money[1];
      tdTotal.innerText="$"+totalPrice;
      tdTotal.style.padding="30px";

      let tdDel=document.createElement("td")
      tdDel.innerHTML=`<a href=""><i class="fa-solid fa-xmark"></i></a>`
      tdDel.style.padding="30px";

      tdDel.firstElementChild.addEventListener("click",function(){
        this.parentElement.parentElement.remove();
        localStorage.removeItem(this.parentElement.parentElement)
        arr=filter(p=>p!=this.parentElement.parentElement)
        localStorage.setItem("basket", JSON.stringify(arr));
      })
      
   

      tr.append(tdImage,tdName,tdPrice,tdCount,tdTotal,tdDel);
      table.lastElementChild.append(tr);
      tr.style.width="100%";
      totally+=totalPrice;
      miniTotalPrice.innerText="$"+""+totally;
      endPrice.innerText=Math.ceil(totally+(totally*18)/100);
      localStorage.setItem("basket",JSON.stringify(arr));


  });

