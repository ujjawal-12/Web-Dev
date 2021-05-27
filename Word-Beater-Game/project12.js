let words = ["text", "object", "sibling", "character", "boolean", "javascript", "reg-expr", "programing", "inheritance", "encapsulation", "abstration", "polymorphism"];

let dataitem = { count: 5, score: 0 }; let value; let key; let i = 0; let idgenerate;
let scrinc = 0;
let btnode = document.querySelector("div#btn button");
btnode.addEventListener('click', start, false);

let df = document.createDocumentFragment();
let textnode = document.getElementById("data");
let divnode = document.createElement("div");
let h3node = document.createElement("h3");
let h4node = document.createElement("h3");
let btndiv = document.getElementById("btn");
let headernode = document.getElementById("header");
let h2node = document.createElement("h2");
let inputnode = document.getElementById("input");
let crtenode = document.createElement("h3");
let reloadbutton = document.createElement("input");
let btndiv1 = document.getElementById("btn1");
reloadbutton.type = "button";
reloadbutton.value = "Reset";
reloadbutton.addEventListener('click', function (e) { window.location.reload(); }, false);

function start(e) {
  e.target.remove();
  h2node.textContent = words[i];
  h2node.id = "h2node";
  headernode.appendChild(h2node);
  h4node.textContent = "Score:0";
  divnode.id = "display";
  divnode.appendChild(h3node);
  divnode.appendChild(h4node);
  df.appendChild(divnode);
  btndiv.appendChild(df);
  dispword();
  countdown();

}

function dispword() {
  inputnode.addEventListener('keyup', active, false);
}

function active(e) {
  value = e.target.value;
  key = e.keyCode;
  if (13 == key) {
    execute();
  }
}

function execute() {
  if (words[i] == value) {
    i++;
    scrinc += 10;
    h2node.textContent = words[i];
    headernode.appendChild(h2node);
    textnode.value = "";
    h4node.textContent = `Score: ${(scrinc)}`;
    clearInterval(idgenerate);
    dataitem.count=5;
     countdown();
    if (scrinc > 30 && scrinc < 50) {
      h4node.style.color = "yellow";
    }
    else if (scrinc >= 50) { h4node.style.color = "darkblue"; }
    else { h4node.style.color = "red"; }
  }
  else {
    textnode.value = "";
  }
}


function countdown() {
  let i = 0;
  h3node.textContent = `Time Left:${dataitem.count}`
   idgenerate = setInterval(function () {
    dataitem.count--; h3node.textContent = `Time Left:${dataitem.count}`;
    if (dataitem.count == 0) { clearInterval(idgenerate); h3node.style.color = "red"; textnode.value = ""; crtenode.textContent = "Game Over!!!"; inputnode.removeEventListener('keyup', active, false); crtenode.style.color = "red"; inputnode.appendChild(crtenode); btndiv1.appendChild(reloadbutton); }
  }, 1000);
}
