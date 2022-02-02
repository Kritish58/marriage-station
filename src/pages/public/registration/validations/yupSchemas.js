import * as yup from "yup";

export const part1Schema = yup.object().shape({
  profileFor: yup.string().required(),
  gender: yup.string().required(),
  name: yup.string().required(),
  countryCode: yup.string().required(),
  mobileNumber: yup.string().length(10).required(),
});

export const part2Schema = yup.object().shape({
  // dateOfBirth: yup
  //   .date()
  //   .min(new Date().getFullYear - 100)
  //   .max(new Date().getFullYear - 18)
  //   .required("Date of birth is required."),
  age: yup.string().required("Age is required."),
  religion: yup.string().required("Religion is required."),
  motherTongue: yup.string().required("Mother tongue is required."),
  email: yup
    .string()
    .email("Please provide valid email.")
    .required("Email id is required."),
  password: yup
    .string()
    .min(8)
    .max(20)
    .required("Password is required.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must contain 8 characters, One uppercase, One lowercase, One number and one special case character !"
    ),
  confirmPassword: yup
    .string()
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Both password need to be the same"),
    })
    .required("Confirm password required"),
});

export const part3Schema = yup.object().shape({
  caste: yup.string().required("Caste is required."),
  marryAnotherCommunity: yup.string().required("Required!"),
  subCaste: yup.string(),
  gothra: yup.string(),
  dosh: yup.string().required("Please specify if any dosh."),
});

export const part4Schema = yup.object().shape({
  // maritalStatus: yup.string().required(),
  // noOfChildren: yup.string().required(),
  height: yup.string().required("Height is required."),
  // familyStatus: yup.string().required(),
  // familyType: yup.string().required(),
  // familyValues: yup.string().required(),
  // disability: yup.string().required(),
});

export const part5Schema = yup.object().shape({
  heightestEducation: yup.string().required("Education field is required."),
  // employedIn: yup.string().required(),
  occupation: yup.string().required(),
  // incomeCurrency: yup.string().required(),
  annualIncome: yup.string().required(),
  workLocation: yup.string().required(),
  // citizenship: yup.string().required(),
  // residentStatus: yup.string().required(),
});

export const part6Schema = yup.object().shape({
  description: yup.string().min(100).max(300).required(),
});
