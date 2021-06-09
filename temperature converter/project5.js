
  
function ctf()
{ let val=document.querySelector("#input").value;
  
  if(val)
 { let data=document.querySelector("#input");
  let result=data.value;
  let fahren=Math.round((result*9/5)+32);
  let chk=document.querySelector("#output");
  chk.value=fahren;
}
else{
let oop=document.querySelector("#output").value;
let cel=(oop-32)*5/9;
let chke=document.querySelector("#input");
chke.value=cel;
}
}
