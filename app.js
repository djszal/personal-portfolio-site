let state = {}

state.contact = 
    {name: null, email: null, message: null}


const body = document.body

const sendButton = document.querySelector(".button")

const sendEmail = () => {
    console.log("Hello")
}

sendButton.addEventListener("click", sendEmail)