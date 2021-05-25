let start=document.querySelector('.btn-1');
let stop=document.querySelector('.btn-2');
let rest=document.querySelector('.btn-3');
let min=document.querySelector('.hour');
let sec=document.querySelector('.min');
let btnnode=document.querySelector('.buttons');
console.log(btnnode);
let count=0;
let iterator=0;
let intervalid;

function startwatch()
{  start.style.display="none";
   stop.style.cssText="display:block; margin-right:30px;";
  btnnode.style.cssText="display:flex;";
  

  intervalid=setInterval(callfun,1000);
}

function stopwatch()
{
  start.style.display="block";
  stop.style.display='none';
  clearInterval(intervalid);

}

function resetwatch()
{
  stopwatch();
  count=0;
  iterator=0;
  min.innerText="00";
  sec.innerText="00";
}
function callfun()
{  
   let ctn=++count;
    if(count === 60)
     {  let cdwn=++iterator;
       min.textContent=result(cdwn);
       count=0;
     }
        sec.textContent=result(ctn);
}

function result(data)
{
  return data<10?`0 ${data}`:data;
}


start.addEventListener('click',startwatch);
stop.addEventListener('click',stopwatch);
rest.addEventListener('click',resetwatch);
