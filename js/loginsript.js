function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" &&  e.target.value.length > 12) {
                setInputError(inputElement, "Username must be at most 12 characters in length");
            }
            else if(e.target.id === "signupUsername"&&!isLetter(e.target.value)){
                setInputError(inputElement, "error name");
            }
            
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupPassword" ) {
                 var n = e.target.value.length;
                 var pass=e.target.value;
               for (let i = 1; i < n; i++){
               if (pass[i] == pass[0]){
                 setInputError(inputElement, "All characters are same!");

               }
           }
            
   
               
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });

document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupEmail") {
                 if (!e.target.value.includes(".") || !e.target.value.includes("@")) {
                    setInputError(inputElement, "Incorrect email");
       
    }
               
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}