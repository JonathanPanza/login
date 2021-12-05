const button = document.getElementById('button')

button.addEventListener('click', (event) => {
    event.preventDefault()

    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const entPassword = document.getElementById('enter-password')
    const confPassword = document.getElementById('confirm-password')

    if(name.value == "") {
        name.classList.add('errorinput')
    } else {
        name.classList.add('elseinput')
    }


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


    if(confPassword.value == "") {
        confPassword.classList.add('errorinput')
    } else {
        confPassword.classList.add('elseinput')
    }


    //validação//
    
    if(email.value.index0f("@") == -1 || email.value.index0f(".") == -1 || (email.value.index0f(".") - email.value.index0f("@") == -1)) {
        email.classList.add('errorinput')
    }
})