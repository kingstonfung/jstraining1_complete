weatherApp.displayErrorMessage = function (message) {
  var errorLabel = document.querySelector('label[for="search"]');
  errorLabel.innerHTML = message;
}
