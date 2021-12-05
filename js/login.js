const button = document.getElementById('button')

button.addEventListener('click', (event) => {
    event.preventDefault()
    
    const email = document.getElementById('email')
    const entPassword = document.getElementById('enter-password')

    if(email.value == "") {
        email.classList.add('errorinput')
    } else {
        email.classList.add('elseinput')
    }

    if(entPassword.value == "") {
        entPassword.classList.add('errorinput')
    } else {
        entPassword.classList.add('elseinput')
    }


    //validação//
    
    if(email.value.index0f("@") == -1 || email.value.index0f(".") == -1 || (email.value.index0f(".") - email.value.index0f("@") == -1)) {
        email.classList.add('errorinput')
    }
})