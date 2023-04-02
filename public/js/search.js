// Search button function at footer
// Get references to the search input field and search button on the page
  var input = document.querySelector("#search")
  var searchButton = document.querySelector("#search-button");

  // Add event listener to the search button
  searchButton.addEventListener("click", search);

  // Define 'search' function & prevent the default form submission behavior
  function search(event) {
    event.preventDefault();
    console.log("Button Works!!");
    console.log(input.value);
  }