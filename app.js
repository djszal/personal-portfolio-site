let state = {}

state.contact = 
    {name: null, email: null, message: null}


const body = document.body

const sendButton = document.querySelector(".button")
const nameInput = document.querySelector("input[name=Name]");
const emailInput = document.querySelector("input[name=Email]");
const messageInput = document.querySelector("textarea[name=Message]");

console.log(messageInput)

const sendEmail = () => {
    
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;
    
    state.contact.name = nameValue
    state.contact.email = emailValue
    state.contact.message = messageValue
    
    console.log(state.contact)
    
}

sendButton.addEventListener("click", sendEmail)