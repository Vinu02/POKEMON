let div=document.createElement("div");
div.style.textAlign="center";

        
let input=document.createElement("input");

input.setAttribute("type","text");
input.setAttribute("id","pokemon-charecter-names");
input.setAttribute("placeholder","Pokemon name")

       
let button=document.createElement("button");
button.setAttribute("type","button");

       
button.classList.add("btn","btn-primary")
button.innerHTML="search";

       
button.addEventListener("click",foo);

       
var id=document.createElement("div");
id.setAttribute("id","id");

var nam=document.createElement("div");
nam.setAttribute("id","nam");

var weight=document.createElement("div");
weight.setAttribute("id","weight");

var abilities=document.createElement("div");
abilities.setAttribute("id","abilities");

var moves=document.createElement("div");
moves.setAttribute("id","moves");

       
div.append(input,button);
document.body.append(div);

       
async function foo(){

    try{

    let pokemonname=document.getElementById("pokemon-charecter-names").value;
    let url=`https://pokeapi.co/api/v2/pokemon/${pokemonname}`;

    let res=await fetch(url);
    let res1=await res.json();

    console.log(res1);

 for(var i in res1){

}

    var div=document.createElement("div");

div.innerHTML =
  `<div class="card">
 
  <h2> <b>#00${res1.id}  </b></h2>  
  <img src="${res1.sprites.front_shiny}"  style="height:200px"; "width:100px"alt=""> 
  <h1><b> ${res1.name} </b></h1><br>
      
      
      
      <h4><span> <b>Weight :${res1.weight}</b> </span></h4>
      <h4> Ability:${res1.abilities[0].ability.name} </h4>
      <h4><b> Move :${res1.moves[0].move.name} </b></h4>
      
    
    
     
</div>`

    }
    catch(error){
        console.log(error)
    }

    document.body.append(div);

};