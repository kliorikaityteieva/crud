module.exports = (user) => {

    let status = {error: false, message: null}

    const validateUser = (email,emailName ) => {
        let status = null

        if(email.length > 20) {
            status = emailName + " is too long"
        }

        if(email.length < 3) {
            status = emailName + " is too short"
        }

        return !!status ? status : false
    }


    const nameValidation = validateUser(user.name, 'username')
    if(nameValidation) {
        status.error = true
        status.message = nameValidation
    }


    const passwordValidation = validateUser(user.password, 'password')
    if(passwordValidation) {
        status.error = true
        status.message = passwordValidation
    }

    return status
}
