function action(){
  let xhr=new XMLHttpRequest();
   xhr.open("GET","https://api.covid19api.com/summary",true);
   xhr.onload=function(){
    if( this.status == 200){ 
      let result=JSON.parse(xhr.response);
      worlddata(result);
      indiadata(result);
    } 
  }
  xhr.send();
}
action();

  function worlddata(result){
       let card=document.getElementById("recoverd");
      card.textContent=result.Global.NewConfirmed;
      let card1=document.getElementById("new-death");
      card1.textContent=result.Global.NewDeaths;
      let card2=document.getElementById("new-recovered");
      card2.textContent=result.Global.NewRecovered;
      let card3=document.getElementById("Total-confirmed");
      card3.textContent=result.Global.TotalConfirmed;
      let card4=document.getElementById("Total-death");
      card4.textContent=result.Global.TotalDeaths;
      let card5=document.getElementById("Total-Recovered");
      card5.textContent=result.Global.TotalRecovered;
  }

  function indiadata(result){
     let india=result.Countries[76];
     
     let card=document.getElementById("Recovered-in");
      card.textContent=india.NewConfirmed;
      let card1=document.getElementById("New-Death-in");
      card1.textContent=india.NewDeaths;
      let card2=document.getElementById("newrecvr");
      card2.textContent=india.NewRecovered;
      let card3=document.getElementById("totalcnfrm");
      card3.textContent=india.TotalConfirmed;
      let card4=document.getElementById("totaldth");
      card4.textContent=india.TotalDeaths;
      let card5=document.getElementById("totalrcvr");
      card5.textContent=india.TotalRecovered;
  }