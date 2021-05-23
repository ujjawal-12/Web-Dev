
   let imgnode=document.querySelector("#img1");
   let btnnode=document.querySelector(".btn");
   btnnode.addEventListener("click", change );
   function change()
   {
     let inputnode=document.querySelector(".txt").value;
     imgnode.setAttribute("src",`https://joeschmoe.io/api/v1/ ${inputnode}`);

   }