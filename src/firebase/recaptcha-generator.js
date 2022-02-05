import { firebaseAuth } from ".";
import { RecaptchaVerifier } from "firebase/auth";

export const generateRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha",
    {
      size: "invisible",
      callback: (res) => {},
    },
    firebaseAuth
  );
};
