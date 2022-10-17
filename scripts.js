// set constants (cannot be redeclared)
const buttonContainer = document.getElementById("buttonContainer");
const buttons = buttonContainer.getElementsByClassName("btn");

// Scroll to Top 
function scrollToTop() { // gets the vertical position of the scroll bar
  window.scrollTo(0, 0); // scroll event activates when the user scrolls up or down
}

// declare a function called filterSelection 
// shows all the cards
filterSelection("all") 
function filterSelection(e) {
  let show, i;
  show = document.getElementsByClassName("column");
  if (e == "all") e = "";
  for (i = 0; i < show.length; i++) {
    removeProduction(show[i], "show");
    if (show[i].className.indexOf(e) > -1) addProductuion(show[i], "show");
  }
}

// function that shows the content cards in the category selected
function addProductuion(element, name) {
  let i, filtered1, filtered2;
  filtered1 = element.className.split(" ");
  filtered2 = name.split(" ");
  for (i = 0; i < filtered2.length; i++) {
    if (filtered1.indexOf(filtered2[i]) == -1) {
      element.className += " " + filtered2[i];
    }
  }
}

// function that hides the other content cards not in the category selected
function removeProduction(element, name) {
  let i, filtered1, filtered2;
  filtered1 = element.className.split(" ");
  filtered2 = name.split(" ");
  for (i = 0; i < filtered2.length; i++) {
    while (filtered1.indexOf(filtered2[i]) > -1) {
      filtered1.splice(filtered1.indexOf(filtered2[i]), 1); 
    }
  }
  element.className = filtered1.join(" ");
}

// handles clicks
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


