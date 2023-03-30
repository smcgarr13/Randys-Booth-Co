// Search button function
  var input = document.querySelector("#search")

  var searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("click", search);

  function search(event) {
    event.preventDefault();
    console.log("Button Works!!");
    console.log(input.value);
  }

   