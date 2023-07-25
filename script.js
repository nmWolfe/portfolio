// This will grab an elements id, and assign it to the formDisplay variable
// The function will then toggle the show class on or off
// Allowing the dropdown menu to display

const toggleDropdown = (id_name) => {
  let formDisplay = document.getElementById(id_name);
  formDisplay.classList.toggle("show");
};

// Create a switch function that will change the display
// of the portfolio view to code, or image.
// Will possibly have to go deeper to switch language

const toggleDisplay = (projectName) => {
  let currentDisplay = document.getElementById(projectName);
  currentDisplay.classList.toggle("switch");
};
