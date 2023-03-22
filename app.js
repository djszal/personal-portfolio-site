let state = {}

state.contact = 
    {name: null, email: null, message: null}


const myEmail = 'szalank.dj@gmail.com'
const body = document.body


const sendButton = document.querySelector(".button")
const nameInput = document.querySelector("input[name=Name]");
const emailInput = document.querySelector("input[name=Email]");
const messageInput = document.querySelector("textarea[name=Message]");



const sendEmail = (e) => {
    e.preventDefault()
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;
    
    state.contact.name = nameValue
    state.contact.email = emailValue
    state.contact.message = messageValue


    Email.send({
        SecureToken : "4ffb2b89-912d-4fcf-b243-b927004706a6",
        To : myEmail,
        From : myEmail,
        Subject : `From Portfolio Site: ${state.contact.name} ${state.contact.email}`,
        Body : state.contact.message
    }).then(
      message => alert(message)
    );
    
}



sendButton.addEventListener("click", sendEmail)