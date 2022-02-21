import * as yup from "yup";

export const part1Schema = yup.object().shape({
  profileFor: yup.string().required(),
  gender: yup.string().required(),
  name: yup.string().required(),
  countryCode: yup.string().required(),
  mobileNumber: yup
    .string()
    .min(8, "Doesn't seem to be a valid number.")
    .max(12, "Doesn't seem to be a valid number.")
    .required(),
});

export const part2Schema = yup.object().shape({
  age: yup
    .number()
    .typeError("Age must be a number.")
    .required("Age is required.")
    .min(18, "Unethical age.")
    .max(99, "Unethical age."),
  religion: yup.string().required("Religion is required."),
  motherTongue: yup.string().required("Mother tongue is required."),
  email: yup
    .string()
    .email("Please provide valid email.")
    .required("Email id is required."),
  password: yup.string().min(8).max(20).required("Password is required."),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Must contain 8 characters, One uppercase, One lowercase, One number and one special case character !"
  // ),
  confirmPassword: yup
    .string()
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Both password need to be the same"),
    })
    .required("Password confirmation is required."),
});

export const part3Schema = yup.object().shape({
  caste: yup.string().required("Caste is required."),
  marryAnotherCommunity: yup.string(),
  subCaste: yup.string(),
  gothra: yup.string(),
  manglik: yup.string().required("Mangal dosh?"),
});

export const part4Schema = yup.object().shape({
  maritalStatus: yup.string().required(),
  noOfChildren: yup.string().required(),
  height: yup.string().required("Height is required."),
  familyStatus: yup.string().required(),
  familyType: yup.string().required(),
  familyValues: yup.string().required(),
  disability: yup.string().required(),
});

export const part5Schema = yup.object().shape({
  highestEducation: yup.string().required("Education field is required."),
  occupation: yup.string().required(),
  annualIncome: yup.string().required(),
  workLocation: yup.string().required(),
  // employedIn: yup.string().required(),
  // incomeCurrency: yup.string().required(),
  // citizenship: yup.string().required(),
  // residentStatus: yup.string().required(),
});

export const part6Schema = yup.object().shape({
  description: yup
    .string()
    .required("Write somthing interesting for more profile reach."),
});

export const retrySchema = yup.object().shape({
  email: yup.string().email().required("Email is required."),
  mobileNumber: yup.string().required("Mobile number is required"),
  password: yup.string().min(8).max(20).required("Password is required."),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Must contain 8 characters, One uppercase, One lowercase, One number and one special case character !"
  // ),
  confirmPassword: yup
    .string()
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Both password need to be the same"),
    })
    .required("Password confirmation is required."),
});

export const logInWithEmailSchema = yup.object().shape({
  email: yup.string().email().required("Required."),
  password: yup.string().required("Required."),
});

export const logInWithMobileSchema = yup.object().shape({
  mobileNumber: yup.string().required("Required."),
  password: yup.string().required("Required."),
});

export const forgotPasswordEmailSchema = yup.object().shape({
  email: yup.string().email().required("Required."),
});
export const forgotPasswordMobileSchema = yup.object().shape({
  mobileNumber: yup.string().required("Required."),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup.string().min(8).max(20).required("Password is required."),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Must contain 8 characters, One uppercase, One lowercase, One number and one special case character !"
  // ),
  confirmPassword: yup
    .string()
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Both password need to be the same"),
    })
    .required("Password confirmation is required."),
});

export const otpSchema = yup.object().shape({
  otp: yup.number().min(6, "Required.").required("Required."),
});

export const imageUplaodSchema = yup.object().shape({
  photo1: yup.string().required("Image is required to comlplete profile."),
});

export const basicInfoSchema = yup.object().shape({
  hobby: yup.string().required("Hobbies are required."),
  weight: yup.string().required("Weight is required."),
  bodyType: yup.string().required("Body type is required."),
  college: yup.string().required("College is required."),
});
export const lifestyleInfoSchema = yup.object().shape({
  diet: yup.string().required("Eating habit is required."),
  drink: yup.string().required("Drinking habit is required."),
  smoke: yup.string().required("Smoke habit is required."),
});
export const religionInfoSchema = yup.object().shape({
  star: yup.string().required("Star is required."),
  horoscope: yup.string().required("Horoscope is required."),
  tobHH: yup.string(),
  tobMM: yup.string(),
  tobAoP: yup.string(),
  birthPlace: yup.string().required("Birth place is required."),
  state: yup.string().required("State is required."),
  city: yup.string().required("City is required."),
});
export const familyInfoSchema = yup.object().shape({
  fatherStatus: yup.string().required("Father status is required."),
  motherStatus: yup.string().required("Mother status is required."),
  noOfBrothers: yup.string().required("No. of brothers is required."),
  marriedBrother: yup.string().required("No. of married brothers is required."),
  noOfSisters: yup.string().required("No. of sisters is required."),
  marriedSister: yup.string().required("No. of married sisters is required."),
  familyLocation: yup.string().required("Family location is required."),
});
