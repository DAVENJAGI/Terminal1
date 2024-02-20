function showLogInInfo() {
    console.log("function starting")
  const showEnterUserDataDiv = document.getElementById('enterUserData');
  if (showEnterUserDataDiv.style.display === 'none') {
    showEnterUserDataDiv.style.display = 'block'; // Show the element
  } else {
    showEnterUserDataDiv.style.display = 'none'; // Hide the element
  }
}
const loginButton = document.getElementById('loginbutton');
loginButton.addEventListener('click', showLogInInfo);