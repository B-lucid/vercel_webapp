//? Validation for react hook form

export const emailValidation = {
  required: "Please enter your email address",
  pattern: {
    value: /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Please enter a valid email address",
  },
};

export const passwordValidation = {
  required: "Password is required",
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters long",
  },
  pattern: {
    value: /^(?=.*[A-Z])/,
    message: "Password must contain at least one uppercase letter",
  },
  pattern: {
    value: /^(?=.*[a-z])/,
    message: "Password must contain at least one lowercase letter",
  },
  pattern: {
    value: /^(?=.*\d)/,
    message: "Password must contain at least one number",
  },
};

export const phoneNumberValidation = {
  required: "Please enter your phone number",
  pattern: {
    value: /^\d{10}$/,
    message: "Please enter a valid phone number",
  },
};

export const emailOrPhoneValidation = {
  required: "Please enter your email address or phone number",
  pattern: {
    value: /^([\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|^\d{10})$/,
    message: "Please enter a valid email address or phone number",
  },
};

export const fullNameValidation = {
  required: "Please enter your Full Name",
  minLength: {
    value: 3,
    message: "Please enter a valid full name",
  },
  pattern: {
    value: /^[A-Za-z]+$/,
  },
};

export const dateValidation = {
  required: "Please enter your date of birth",
  validate: (value) => Date.parse(value) !== NaN,
};

export const referralCodeValidation = {
  required: false,
};

export const countryValidation = {
  required: "Please enter your country",
  minLength: {
    value: 3,
    message: "Please enter a valid country name",
  },
};

export const genderValidation = {
  required: "Please enter your gender",
  validate: (value) => value === "Male" || value === "Female",
};
