// Search button function
  // search for a city

  var input = document.querySelector("#search")

  var searchButton = document.querySelector("#search-form");
  searchButton.addEventListener("click", search);

  function search(event) {
    event.preventDefault();
    console.log("Button Works!!");
    console.log(input.value);
  }

//   var data = {
//     initials:initials.value,
//     score:score
// } 

   // how to redirect javascript

    // // save to local storage
    // if (cities.includes(city) == false || city == "") {
    //   var button = $("<button>");
    //   button.text(city);
    //   buttonDiv.append(button);
    //   cities.push(city);
    //   localStorage.setItem("cities", JSON.stringify(cities));
    // }

   