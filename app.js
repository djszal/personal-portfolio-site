let state = {}

state.contact = 
    {name: null, email: null, message: null}


const myEmail = 'szalank.dj@gmail.com'
const body = document.body

const sendButton = document.querySelector(".button")
const nameInput = document.querySelector("input[name=Name]");
const emailInput = document.querySelector("input[name=Email]");
const messageInput = document.querySelector("textarea[name=Message]");

console.log(state.contact)

const sendEmail = (e) => {
    e.preventDefault()
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;
    
    state.contact.name = nameValue
    state.contact.email = emailValue
    state.contact.message = messageValue

    const  link= `mailto:${myEmail}?&subject=${state.contact.name}&body=${state.contact.message}`
    window.location.href = link;
    
    console.log(state.contact)
    
}

sendButton.addEventListener("click", sendEmail)