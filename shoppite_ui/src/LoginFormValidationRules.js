export default function validate(values) {
    let errors = {};
    if(!values.nameUser) {
        errors.nameUser = 'Username is required';
    }
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    if (!values.passwordC) {
        errors.passwordC = 'Confirm Password is required';
    } else if (values.passwordC != values.password) {
        errors.passwordC = 'Password And ConfirmPassword is not same';
    }
    if (!values.boxCheck) {
        errors.boxCheck = 'CheckBox is required';
    }

    return errors;
  };