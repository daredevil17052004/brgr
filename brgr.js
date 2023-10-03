// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger


//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)


//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOMx
  let cheese = document.getElementById("cheese");
  if(state.Cheese){
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.getElementById("tomato");
  if(state.Tomatoes){
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.getElementById("onion");
  if(state.Onions){
    onions.style.display = "inherit";
  } else{
    onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById("lettuce");
  if(state.Lettuce){
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}
document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};
//Challenge 1 - Add/Remove the class active to the buttons based on state
var button1 = document.querySelector(".btn-patty");
button1.addEventListener("click", e => {
  let b = button1.classList.remove("btn-patty");
  button1.classList.toggle(b);
})


const button2 = document.querySelector(".btn-cheese");
button2.addEventListener("click", e=> {
  let a = button2.classList.remove("btn-cheese");
  button2.classList.toggle(a);
})

const button3 = document.querySelector(".btn-tomatoes");
button3.addEventListener("click", e=> {
    let u = button3.classList.remove("btn-tomatoes");
    button3.classList.toggle(u);
})

const button4 = document.querySelector(".btn-onions");
button4.addEventListener("click", e=> {
  let c = button4.classList.remove("btn-onions");
  button4.classList.toggle(c);
})

const button5 = document.querySelector(".btn-lettuce");
button5.addEventListener("click", e=> {
  let d = button5.classList.remove("btn-lettuce");
  button5.classList.toggle("d")
})



//Challenge 2 - Render only the items selected in the ingredients board based on the state

function render(){


  const indPatty = document.querySelector(".btn-patty");
  indPatty.addEventListener("click", e=> {
    let p = document.getElementById("id1");
    if (p.innerHTML === "Patty"){
      p.innerHTML = " ";
    }
    else{
      p.innerHTML = "Patty";
    }
  })

  const indCheese = document.querySelector(".btn-cheese");
  indCheese.addEventListener("click", e=> {
    let ch = document.getElementById("id2");
    if(ch.innerHTML === "Cheese"){
      ch.innerHTML = " ";
    }
    else{
      ch.innerHTML = "Cheese";
    }
  })

  const indTomatoes = document.querySelector(".btn-tomatoes");
  indTomatoes.addEventListener("click", e=>{
    let fh = document.getElementById("id3");
    if(fh.innerHTML === "Tomatoes"){
      fh.innerHTML =  " ";
    }
    else{
      fh.innerHTML = "Tomatoes";
    }
  })

  const indOnions = document.querySelector(".btn-onions");
  indOnions.addEventListener("click", e=>{
    let jh = document.getElementById("id4");
    if(jh.innerHTML === "Onions"){
      jh.innerHTML = " ";
    }
    else{
      jh.innerHTML = "Onions";
    }
  })

  const indLettuce = document.querySelector(".btn-lettuce");
  indLettuce.addEventListener("click", e=> {
    let uh = document.getElementById("id5");
    if(uh.innerHTML === "Lettuce"){
      uh.innerHTML = " ";
    }
    else{
      uh.innerHTML = "Lettuce";
    }
  })
}

render();
//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

var wholeWheatBun = 10;

function Price() {

  let score = 170;
  document.querySelector(".price-details").innerHTML = score;
  let isPricceAdded = false;

  const toggleButton1 = document.querySelector(".btn-patty");
  toggleButton1.addEventListener("click", () => {
    if(isPricceAdded){
      score = score + 80;
    } else{
      score = score - 80;
    }

    isPricceAdded = !isPricceAdded;
    document.querySelector(".price-details").innerHTML = score;
  })
  

  let sce = false;
  const toggleButton2 = document.querySelector(".btn-cheese");
  toggleButton2.addEventListener("click",() => {
    
    if(sce){
      score = score + 10;
    }else{
      score = score - 10;
    }

    sce = !sce;
    document.querySelector(".price-details").innerHTML = score;
  })


  let tom = false;
  const toggleButton3 = document.querySelector(".btn-tomatoes");
  toggleButton3.addEventListener('click', () => {
    if(tom){
      score = score + 20;
    }else{
      score = score - 20;
    }

    tom = !tom;
    document.querySelector(".price-details").innerHTML = score;
  })


  let oni = false;
  const toggleButton4 = document.querySelector(".btn-onions");
  toggleButton4.addEventListener('click', () => {
    if(oni){
      score = score + 20;
    }else{
      score = score - 20;
    }

    oni = !oni;
    document.querySelector(".price-details").innerHTML = score;
  })


  let lett = false;
  const toggleButton5 = document.querySelector(".btn-lettuce");
  toggleButton5.addEventListener('click', () => {
    if(lett){
      score = score + 20;
    }else{
      score = score - 20;
    }

    lett = !lett
    document.querySelector(".price-details").innerHTML = score;
  })


}

Price();