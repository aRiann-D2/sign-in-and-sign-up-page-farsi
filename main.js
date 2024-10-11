const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

console.log(signInButton)
signUpButton.addEventListener('click', () => {
    console.log("clicked")
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    console.log("clicked 222")
    console.log(container)
	container.classList.remove("right-panel-active");    
});