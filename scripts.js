// Scroll to Top 
const button = document.querySelector('button');
button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth'
    })
})

// ------------------------------------------------

// filterSelection('all')
// function filterSelection(e) {
//     const x = document.getElementsByClassName('card');
//     if (e == 'all') e = '';
//     for (i = 0; i < x.length; i++) {
//         removeClass(x[i], "show");
//         if (x[i].className.indexOf(e) > -1) addClass(x[i], "show")
//     }
// }

// function addClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(' ');
//     arr2 = name.split(' ');
//     for (i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i] == -1)) {
//             element.className += ' ' + arr2[i]
//         }
//     }
// }

// function removeClass(element, name) {
//     let i, array1, array2;
//     array1 = element.className.split(" ");
//     array2 = name.split(" ");
//     for (i = 0; i < array2.length; i++) {
//       while (array1.indexOf(array2[i]) > -1) {
//         array1.splice(array1.indexOf(array2[i]), 1); 
//       }
//     }
//     element.className = array1.join(" ");
//   }

// const buttonContainer = document.getElementById("buttonContainer");
// const btns = buttonContainer.getElementsByClassName("btn");
// for (const i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     const current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }













// const films = document.querySelectorAll(".card")
// films.forEach((film)=> {
//     console.log(film)
//     console.log(film.dataset.name)
//     film.style.display = "flex"
// })

// function search_film() {
//     let input = document.getElementById('searchbar').value
//     input = input.toLowerCase()
//     let x = document.getElementsByClassName('card')

//     for (i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase(). includes(input)) {
//             x[i].style.display="none"
//         }
//         else {
//             x[i].style.display="list-item"
//         }
//     }
// }

// const films = [
//     {film: 'Causeway'},
//     {film: 'The Whale'},
//     {film: 'Irma Vep'},
//     {film: 'Ramy'},
//     {film: 'Minari'},
//     {film: 'Moonlight'},
//     {film: 'Zola'},
//     {film: 'Everything Everywhere All At Once'},
//     {film: 'Euphoria'},
//     {film: 'Ex Machina'},
//     {film: 'Uncut Gems'},
//     {film: 'The Green Knight'},
// ]

// productionElement.addEventListener("event type"), () => {

// }

// const searchInput = document.querySelector('.input')
// searchInput.addEventListener("input", (e) => {
//     let value = e.target.value 
//     if (value && value.trim().length > 0){
//         value = value.trim().toLowerCase()
//      } else {

//     }    
// }

// const clearButton = document.getElementById('clear')
// clearButton.addEventListener("click", () => {

// })

// function setList(results) {
//     for (const film of results){
//         const resultFilm = document.createElement('li')
//         resultFilm.classList.add('result-film')
//         const text = document.createTextNode(film.dataset.name)
//         resultFilm.appendChild(text)
//         list.appendChild(resultFilm)
//     }
// }

// searchInput.addEventListener("input", (e) => {
//     let value = e.target.value
//     if (value && value.trim().length > 0) {
//         value = value.trim().toLowerCase()
//         setList(films.filter(film => {
//             return film.name.includes(value)
//         }))
//     }
// })

// function clearList() {
//     while (list.firstChild){
//         list.removeChiled(list.firstChild)
//     }
// }

// searchInput.addEventListener("input", (e) => {
//     let value = e.target.value
//     if (value && value.trim().length > 0){
//         value = value.trim().toLowerCase()
//     } else {
//         clearList()
//     }
// }

// clearSearchButton.addEventListener("click", () => {
//     clearList()
// })

// function noResults() {
//     const error = document.createElement('li')
//     error.classList.add('error-message')
//     const text = document.createTextNode("No Results Found. Please Try Again!")
//     error.appendChild(text)
//     list.appendChild(error)
// }

// function setList(results){
//     clearList()
//     for (const film of results){
//         const resultFilm = document.createElement('li')
//         resultFilm.classList.add('result-film')
//     }
//     if (results.length === 0){
//         noResults()
//     }
// })

