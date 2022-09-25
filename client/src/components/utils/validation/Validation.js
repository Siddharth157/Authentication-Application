export const checkEmpty = value => {
    if(!value) return true
    return false
}

export const checkEmailValidation = email => {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const checkPasswordLength = password => {
    if(password.length < 7) return true
    return false
}

export const comparePassword = (password, confirmPassword) => {
    if(password === confirmPassword) return true
    return false
}