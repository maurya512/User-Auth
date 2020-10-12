// pull in validator and is-empty dependencies

const Validtor = require('validator');
const isEmpty = require('is-empty');

// export the function validateRegisterInput, which takes in data as a parameter
module.exports = function validateRegisterInput(data) {
    // initialize an empty errors object
    let errors = {};

    // convert empty fields to an empty string so we can use validator functions
    // check for empty field, valid email formats, password requirements and confirm password equality using validator functions

    data.name = !isEmpty(data.name) ? data.name: "";
    data.email = !isEmpty(data.email) ? data.email: "";
    data.password = !isEmpty(data.password) ? data.password: "";
    data.password2 = !isEmpty(data.password2) ? data.password2: "";

    // name checks
    if (Validtor.isEmpty(data.name)) {
        errors.name = "Name is required";
    }

    // email checks
    if (Validtor.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    } else if (!Validtor.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    // password checks
    if (Validtor.isEmail(data.password)) {
        errors.password = 'Confirm password field is required';
    }

    // compare passwords
    if (Validtor.isEmpty(data.password2)) {
        errors.password2 = 'Confirm password field is required';
    }

    // check the length of the password
    if (!Validtor.isLength(data.password), {min: 6, max: 30}) {
        errors.password = 'Password must be at least 6 characters';
    }

    // check if the password matches
    if (!Validtor.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

