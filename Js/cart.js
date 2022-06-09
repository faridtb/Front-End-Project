let emptyScreen=document.querySelector(".empty")



if(localStorage.getItem("basket")==null){
    localStorage.setItem("basket",JSON.stringify([]));
  }

  let arr=JSON.parse(localStorage.getItem("basket"));

  if(arr.length!=0){
    emptyScreen.style.display="none";
  }
  else{
    emptyScreen.style.display="flex";
  }