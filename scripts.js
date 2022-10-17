// Scroll to Top 
function scrollToTop() { // gets the vertical position of the scroll bar
  window.scrollTo(0, 0); // scroll event activates when the user scrolls up or down
}

// function and show all items
filterSelection("all") 
function filterSelection(e) {
  let show, i;
  show = document.getElementsByClassName("column");
  if (e == "all") e = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < show.length; i++) {
    removeProduction(show[i], "show");
    if (show[i].className.indexOf(e) > -1) addProductuion(show[i], "show");
  }
}

// Show filtered elements
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

// Hide elements that are not selected
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

// Add active class to the current button 
const btnContainer = document.getElementById("myBtnContainer");
const btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

